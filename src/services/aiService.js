import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models';
const API_KEY = import.meta.env.VITE_HUGGING_FACE_API_KEY;

const aiService = {
  async translateText(text, targetLanguage = 'nl') {
    try {
      const response = await axios.post(
        `${HUGGING_FACE_API_URL}/Helsinki-NLP/opus-mt-en-nl`,
        { inputs: text },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data[0]?.translation_text || '';
    } catch (error) {
      console.error('Translation error:', error);
      return '';
    }
  },

  async generateExplanation(prompt, retries = 3) {
    try {
      if (!API_KEY) {
        console.error('Hugging Face API key is missing');
        return '';
      }

      // Use a Dutch-specific model
      const model = 'GroNLP/gpt2-small-dutch';

      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const response = await axios.post(
            `${HUGGING_FACE_API_URL}/${model}`,
            { 
              inputs: `Generate 2 short, simple example sentences in Dutch using the word "${prompt}" with English translations in parentheses.`,
              parameters: {
                max_length: 100,
                num_return_sequences: 1,
                temperature: 0.5,
                top_k: 20,
                repetition_penalty: 1.5,
                do_sample: true
              }
            },
            {
              headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
              },
              timeout: 15000 // 15 seconds timeout
            }
          );

          console.log('API Response:', response.data);
          return response.data[0]?.generated_text || '';
        } catch (error) {
          if (attempt < retries) {
            console.log(`Attempt ${attempt} failed, retrying...`);
            await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
            continue;
          }
          throw error;
        }
      }
      return '';
    } catch (error) {
      console.error('Explanation generation error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      return '';
    }
  },

  async checkGrammar(text) {
    try {
      const response = await axios.post(
        `${HUGGING_FACE_API_URL}/grammarly/coedit-large`,
        { inputs: text },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data?.corrections || [];
    } catch (error) {
      console.error('Grammar check error:', error);
      return [];
    }
  }
};

export default aiService;
