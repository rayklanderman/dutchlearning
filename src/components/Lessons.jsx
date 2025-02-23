import React, { useState, useEffect } from 'react';
import SpeechPractice from './SpeechPractice';

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const toggleLessonCompletion = (lessonId, e) => {
    e.stopPropagation();
    const isCompleting = !completedLessons.includes(lessonId);
    setCompletedLessons(prev => 
      isCompleting
        ? [...prev, lessonId]
        : prev.filter(id => id !== lessonId)
    );
    showNotification(
      isCompleting 
        ? 'Lesson marked as completed! 🎉' 
        : 'Lesson marked as incomplete'
    );
  };

  const lessons = [
    {
      id: 0,
      title: 'Dutch Alphabet & Pronunciation',
      description: 'Learn the Dutch alphabet, pronunciations, and special sounds',
      content: [
        {
          subtitle: 'Vowels and Their Sounds',
          examples: [
            { dutch: 'a', english: 'like "ah" in "father"', usage: 'kat (cat), dag (day)' },
            { dutch: 'aa', english: 'longer "ah" sound', usage: 'maan (moon), gaan (to go)' },
            { dutch: 'e', english: 'like "e" in "bed"', usage: 'pet (cap), weg (way)' },
            { dutch: 'ee', english: 'like "ay" in "say"', usage: 'zee (sea), twee (two)' },
            { dutch: 'i', english: 'like "i" in "sit"', usage: 'vis (fish), dit (this)' },
            { dutch: 'ie', english: 'like "ee" in "see"', usage: 'ziek (sick), niet (not)' },
            { dutch: 'o', english: 'like "o" in "hot"', usage: 'pot (pot), op (on)' },
            { dutch: 'oo', english: 'like "o" in "go"', usage: 'boot (boat), rood (red)' },
            { dutch: 'u', english: 'like "u" in "put"', usage: 'bus (bus), nut (use)' },
            { dutch: 'uu', english: 'like "u" in French "tu"', usage: 'muur (wall), vuur (fire)' }
          ]
        },
        {
          subtitle: 'Special Vowel Combinations',
          examples: [
            { dutch: 'ei/ij', english: 'like "i" in "fine"', usage: 'tijd/teid (time), wijn (wine)' },
            { dutch: 'eu', english: 'like "u" in French "deux"', usage: 'leuk (fun), neus (nose)' },
            { dutch: 'oe', english: 'like "oo" in "boot"', usage: 'boek (book), koek (cookie)' },
            { dutch: 'ui', english: 'unique Dutch sound, like "ow" + "ee"', usage: 'huis (house), muis (mouse)' },
            { dutch: 'ou/au', english: 'like "ow" in "now"', usage: 'koud/auto (cold/car)' }
          ]
        },
        {
          subtitle: 'Consonants with Special Pronunciation',
          examples: [
            { dutch: 'g/ch', english: 'guttural sound, like clearing throat', usage: 'goed (good), acht (eight)' },
            { dutch: 'sch', english: 'like "s" + guttural "ch"', usage: 'school (school), schip (ship)' },
            { dutch: 'v', english: 'softer than English "v"', usage: 'veel (much), vis (fish)' },
            { dutch: 'w', english: 'like "v" but with rounded lips', usage: 'water (water), werk (work)' },
            { dutch: 'j', english: 'like "y" in "yes"', usage: 'ja (yes), jong (young)' }
          ]
        }
      ]
    },
    {
      id: 1,
      title: 'Basic Greetings',
      description: 'Learn common Dutch greetings and introductions',
      content: [
        {
          subtitle: 'Formal Greetings',
          examples: [
            { dutch: 'Goedemorgen', english: 'Good morning', usage: 'Used in the morning until noon' },
            { dutch: 'Goedemiddag', english: 'Good afternoon', usage: 'Used from noon until evening' },
            { dutch: 'Goedenavond', english: 'Good evening', usage: 'Used in the evening' },
            { dutch: 'Hallo', english: 'Hello', usage: 'General greeting, can be used any time' }
          ]
        },
        {
          subtitle: 'Informal Greetings',
          examples: [
            { dutch: 'Hoi', english: 'Hi', usage: 'Casual greeting among friends' },
            { dutch: 'Doei', english: 'Bye', usage: 'Informal goodbye' },
            { dutch: 'Tot ziens', english: 'See you later', usage: 'General farewell' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Basic Grammar',
      description: 'Learn fundamental Dutch grammar rules',
      content: [
        {
          subtitle: 'Word Order',
          examples: [
            { dutch: 'Ik ga naar school', english: 'I go to school', usage: 'Subject - Verb - Object' },
            { dutch: 'Morgen ga ik naar school', english: 'Tomorrow I go to school', usage: 'Time - Verb - Subject - Object' }
          ]
        },
        {
          subtitle: 'Articles',
          examples: [
            { dutch: 'De man', english: 'The man', usage: 'Definite article for masculine nouns' },
            { dutch: 'Het huis', english: 'The house', usage: 'Definite article for neuter nouns' },
            { dutch: 'Een boek', english: 'A book', usage: 'Indefinite article' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Everyday Phrases',
      description: 'Common phrases for daily situations',
      content: [
        {
          subtitle: 'Shopping',
          examples: [
            { dutch: 'Hoeveel kost dit?', english: 'How much does this cost?' },
            { dutch: 'Ik wil graag betalen', english: 'I would like to pay' },
            { dutch: 'Heb je dit in een andere kleur?', english: 'Do you have this in another color?' }
          ]
        },
        {
          subtitle: 'Dining',
          examples: [
            { dutch: 'Ik zou graag een tafel reserveren', english: 'I would like to reserve a table' },
            { dutch: 'Wat raadt u aan?', english: 'What do you recommend?' },
            { dutch: 'De rekening, alstublieft', english: 'The bill, please' }
          ]
        }
      ]
    }
  ];

  const renderLessonContent = (lesson) => {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
          <button
            onClick={(e) => toggleLessonCompletion(lesson.id, e)}
            className={`px-4 py-2 rounded-lg transition-colors ${completedLessons.includes(lesson.id)
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {completedLessons.includes(lesson.id) ? 'Completed ✓' : 'Mark as Complete'}
          </button>
        </div>

        <p className="text-gray-600">{lesson.description}</p>

        <div className="space-y-6">
          {lesson.content.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.subtitle}</h3>
              <div className="grid gap-4">
                {section.examples.map((example, i) => (
                  <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-blue-600">{example.dutch}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-700">{example.english}</span>
                    </div>
                    {example.usage && (
                      <p className="text-sm text-gray-600 mt-1">Example: {example.usage}</p>
                    )}
                    <div className="mt-2">
                      <SpeechPractice text={example.dutch} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dutch Language Lessons</h1>

      {notification && (
        <div className={`p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {notification.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {lessons.map(lesson => (
          <div
            key={lesson.id}
            onClick={() => setSelectedLesson(selectedLesson === lesson.id ? null : lesson.id)}
            className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all ${selectedLesson === lesson.id ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{lesson.title}</h2>
                <p className="text-gray-600 mt-1">{lesson.description}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${completedLessons.includes(lesson.id) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                {completedLessons.includes(lesson.id) ? 'Completed' : 'Not Started'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLesson !== null && (
        <div className="mt-8">
          {renderLessonContent(lessons.find(l => l.id === selectedLesson))}
        </div>
      )}
    </div>
  );
};

export default Lessons;
