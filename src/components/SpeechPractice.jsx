import React, { useState, useEffect } from 'react';

const SpeechPractice = ({ text }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'nl-NL';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    } else {
      setFeedback('Text-to-speech not supported in this browser');
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'nl-NL';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setFeedback('Listening...');
      };

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
        checkPronunciation(result);
      };

      recognition.onerror = (event) => {
        setFeedback(`Error: ${event.error}`);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      setFeedback('Speech recognition not supported in this browser');
    }
  };

  const checkPronunciation = (userInput) => {
    const normalizedText = text.toLowerCase().trim();
    const normalizedInput = userInput.toLowerCase().trim();
    
    if (normalizedInput === normalizedText) {
      setFeedback('Excellent pronunciation! 🎉');
    } else {
      setFeedback('Pronunciation needs improvement. Try again!');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={speakText}
          disabled={isSpeaking}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSpeaking ? 'Speaking...' : 'Hear Pronunciation'}
        </button>
        <button
          onClick={startListening}
          disabled={isListening}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
        >
          {isListening ? 'Listening...' : 'Practice Speaking'}
        </button>
      </div>

      {transcript && (
        <div className="mt-4">
          <p className="text-gray-700">You said: <span className="font-medium">{transcript}</span></p>
        </div>
      )}

      {feedback && (
        <div className="mt-4">
          <p className={`text-sm ${feedback.includes('Excellent') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpeechPractice;
