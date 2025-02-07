import React, { useState } from 'react';

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const vocabularyList = [
    // Greetings
    { dutch: 'Hallo', english: 'Hello', category: 'Greetings' },
    { dutch: 'Goedemorgen', english: 'Good morning', category: 'Greetings' },
    { dutch: 'Goedemiddag', english: 'Good afternoon', category: 'Greetings' },
    { dutch: 'Goedenavond', english: 'Good evening', category: 'Greetings' },
    { dutch: 'Welterusten', english: 'Good night', category: 'Greetings' },
    { dutch: 'Doei', english: 'Bye', category: 'Greetings' },
    { dutch: 'Tot ziens', english: 'See you later', category: 'Greetings' },

    // Common Phrases
    { dutch: 'Dank je wel', english: 'Thank you', category: 'Common Phrases' },
    { dutch: 'Alstublieft', english: 'Please', category: 'Common Phrases' },
    { dutch: 'Graag gedaan', english: 'You\'re welcome', category: 'Common Phrases' },
    { dutch: 'Het spijt me', english: 'I\'m sorry', category: 'Common Phrases' },
    { dutch: 'Geen probleem', english: 'No problem', category: 'Common Phrases' },
    { dutch: 'Hoe gaat het?', english: 'How are you?', category: 'Common Phrases' },
    { dutch: 'Prima, dank je', english: 'Fine, thank you', category: 'Common Phrases' },

    // Numbers
    { dutch: 'Een', english: 'One', category: 'Numbers' },
    { dutch: 'Twee', english: 'Two', category: 'Numbers' },
    { dutch: 'Drie', english: 'Three', category: 'Numbers' },
    { dutch: 'Vier', english: 'Four', category: 'Numbers' },
    { dutch: 'Vijf', english: 'Five', category: 'Numbers' },
    { dutch: 'Zes', english: 'Six', category: 'Numbers' },
    { dutch: 'Zeven', english: 'Seven', category: 'Numbers' },
    { dutch: 'Acht', english: 'Eight', category: 'Numbers' },
    { dutch: 'Negen', english: 'Nine', category: 'Numbers' },
    { dutch: 'Tien', english: 'Ten', category: 'Numbers' },

    // Food and Drinks
    { dutch: 'Water', english: 'Water', category: 'Food & Drinks' },
    { dutch: 'Koffie', english: 'Coffee', category: 'Food & Drinks' },
    { dutch: 'Thee', english: 'Tea', category: 'Food & Drinks' },
    { dutch: 'Brood', english: 'Bread', category: 'Food & Drinks' },
    { dutch: 'Kaas', english: 'Cheese', category: 'Food & Drinks' },
    { dutch: 'Melk', english: 'Milk', category: 'Food & Drinks' },
    { dutch: 'Appel', english: 'Apple', category: 'Food & Drinks' },
    { dutch: 'Boterham', english: 'Sandwich', category: 'Food & Drinks' },

    // Days of the Week
    { dutch: 'Maandag', english: 'Monday', category: 'Days & Time' },
    { dutch: 'Dinsdag', english: 'Tuesday', category: 'Days & Time' },
    { dutch: 'Woensdag', english: 'Wednesday', category: 'Days & Time' },
    { dutch: 'Donderdag', english: 'Thursday', category: 'Days & Time' },
    { dutch: 'Vrijdag', english: 'Friday', category: 'Days & Time' },
    { dutch: 'Zaterdag', english: 'Saturday', category: 'Days & Time' },
    { dutch: 'Zondag', english: 'Sunday', category: 'Days & Time' },

    // Colors
    { dutch: 'Rood', english: 'Red', category: 'Colors' },
    { dutch: 'Blauw', english: 'Blue', category: 'Colors' },
    { dutch: 'Groen', english: 'Green', category: 'Colors' },
    { dutch: 'Geel', english: 'Yellow', category: 'Colors' },
    { dutch: 'Zwart', english: 'Black', category: 'Colors' },
    { dutch: 'Wit', english: 'White', category: 'Colors' },
    { dutch: 'Oranje', english: 'Orange', category: 'Colors' },
    { dutch: 'Paars', english: 'Purple', category: 'Colors' },

    // Family
    { dutch: 'Moeder', english: 'Mother', category: 'Family' },
    { dutch: 'Vader', english: 'Father', category: 'Family' },
    { dutch: 'Zus', english: 'Sister', category: 'Family' },
    { dutch: 'Broer', english: 'Brother', category: 'Family' },
    { dutch: 'Oma', english: 'Grandmother', category: 'Family' },
    { dutch: 'Opa', english: 'Grandfather', category: 'Family' },
    { dutch: 'Kind', english: 'Child', category: 'Family' },
    { dutch: 'Familie', english: 'Family', category: 'Family' },

    // Weather
    { dutch: 'Zon', english: 'Sun', category: 'Weather' },
    { dutch: 'Regen', english: 'Rain', category: 'Weather' },
    { dutch: 'Wind', english: 'Wind', category: 'Weather' },
    { dutch: 'Sneeuw', english: 'Snow', category: 'Weather' },
    { dutch: 'Warm', english: 'Warm', category: 'Weather' },
    { dutch: 'Koud', english: 'Cold', category: 'Weather' },
    { dutch: 'Bewolkt', english: 'Cloudy', category: 'Weather' },
    { dutch: 'Zonnig', english: 'Sunny', category: 'Weather' }
    ];

  const categories = ['All', ...new Set(vocabularyList.map(word => word.category))];
  const filteredList = vocabularyList
    .filter(word => selectedCategory === 'All' || word.category === selectedCategory)
    .filter(word => 
      searchTerm === '' || 
      word.dutch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 pb-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dutch Vocabulary</h1>
      <div className="w-full max-w-4xl">
        <div className="mb-4">
          <input
          type="text"
          placeholder="Search words in Dutch or English..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mb-4 text-gray-600">
          Showing {filteredList.length} {filteredList.length === 1 ? 'word' : 'words'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
        <div className="mb-6 flex justify-center space-x-4 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dutch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {filteredList.map((word, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{word.dutch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{word.english}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{word.category}</td>
                </tr>
                ))}
              </tbody>
              </table>
              {filteredList.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No words found matching your search criteria
              </div>
              )}
            </div>
            </div>
          </div>
  );
};

export default Vocabulary;
