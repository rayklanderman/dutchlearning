import React, { useState, useEffect } from 'react';
import aiService from '../services/aiService';
import { vocabularyList } from '../data/vocabularyData';
import { exampleSentences } from '../data/exampleSentences';

const categories = ['All', 'Greetings', 'Common Phrases', 'Numbers', 'Food & Drinks', 'Days & Time', 'Colors', 'Family', 'Weather'];

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState(null);
  const [loadingExamples, setLoadingExamples] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const filtered = vocabularyList.filter(item => 
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      (searchTerm === '' || 
        item.dutch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.english.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredList(filtered);
  }, [selectedCategory, searchTerm]);

  const generateExamples = async (word) => {
    setLoadingExamples(prev => ({ ...prev, [word]: true }));
    setErrorMessages(prev => ({ ...prev, [word]: '' }));
    
    try {
      const prompt = `Generate 2 example sentences in Dutch using the word "${word}" with English translations in parentheses`;
      const response = await aiService.generateExplanation(prompt);
      
      if (response) {
        const examples = response.split('\n').filter(line => line.trim() !== '');
        setExampleSentences(prev => ({
          ...prev,
          [word]: examples
        }));
      }
    } catch (error) {
      setErrorMessages(prev => ({
        ...prev,
        [word]: 'Failed to generate examples. Please try again.'
      }));
    } finally {
      setLoadingExamples(prev => ({ ...prev, [word]: false }));
    }
  };

  const handleWordClick = (word) => {
    setSelectedWord(word === selectedWord ? null : word);
  };

  const renderContent = () => {
    if (filteredList.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">No vocabulary items found matching your criteria.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredList.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.dutch}</h3>
                <p className="text-gray-600">{item.english}</p>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.category}</span>
            </div>
            <div className="mt-2 space-y-2">
              {exampleSentences[item.dutch] && (
                <div className="bg-blue-50 p-2 rounded">
                  {exampleSentences[item.dutch].map((example, i) => (
                    <p key={i} className="text-sm text-gray-700 mb-1 last:mb-0">{example}</p>
                  ))}
                </div>
              )}
              <button
                onClick={() => generateExamples(item.dutch)}
                disabled={loadingExamples[item.dutch]}
                className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none flex items-center"
              >
                {loadingExamples[item.dutch] ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  'Generate More Examples with AI'
                )}
              </button>
              {errorMessages[item.dutch] && (
                <p className="text-sm text-red-600">{errorMessages[item.dutch]}</p>
              )}
            </div>
            <button
              onClick={() => handleWordClick(item.dutch)}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              {selectedWord === item.dutch ? 'Hide example' : 'Show example'}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dutch Vocabulary</h1>
        <div className="flex gap-4 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {renderContent()}
    </div>
  );
};

export default Vocabulary;
