import React, { useState, useEffect } from 'react';

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
        title: 'Numbers and Counting',
      description: 'Master counting in Dutch',
      content: [
        {
          subtitle: 'Basic Numbers (1-10)',
          examples: [
            { dutch: 'Een', english: 'One', usage: 'First number' },
            { dutch: 'Twee', english: 'Two', usage: 'Second number' },
            { dutch: 'Drie', english: 'Three', usage: 'Third number' },
            { dutch: 'Vier', english: 'Four', usage: 'Fourth number' },
            { dutch: 'Vijf', english: 'Five', usage: 'Fifth number' }
          ]
        },
        {
          subtitle: 'Usage in Conversations',
          examples: [
            { dutch: 'Ik heb twee katten', english: 'I have two cats', usage: 'Using numbers in sentences' },
            { dutch: 'Het is drie uur', english: 'It is three o\'clock', usage: 'Telling time' }
          ]
        }
      ]
    },
    {
        id: 3,
        title: 'Essential Phrases',
      description: 'Learn everyday Dutch expressions',
      content: [
        {
          subtitle: 'Common Questions',
          examples: [
            { dutch: 'Hoe gaat het?', english: 'How are you?', usage: 'Asking about wellbeing' },
            { dutch: 'Wat is je naam?', english: 'What is your name?', usage: 'Asking someone\'s name' },
            { dutch: 'Spreek je Engels?', english: 'Do you speak English?', usage: 'Asking about language' }
          ]
        },
        {
          subtitle: 'Basic Responses',
          examples: [
            { dutch: 'Goed, dank je', english: 'Good, thank you', usage: 'Responding to how are you' },
            { dutch: 'Ik heet...', english: 'My name is...', usage: 'Introducing yourself' },
            { dutch: 'Het spijt me', english: 'I\'m sorry', usage: 'Apologizing' }
          ]
        }
      ]
    },
    {
        id: 4,
        title: 'Basic Grammar',
      description: 'Learn fundamental Dutch grammar rules',
      content: [
        {
          subtitle: 'Personal Pronouns',
          examples: [
            { dutch: 'Ik', english: 'I', usage: 'First person singular' },
            { dutch: 'Jij/Je', english: 'You', usage: 'Second person singular informal' },
            { dutch: 'Hij', english: 'He', usage: 'Third person singular masculine' },
            { dutch: 'Zij/Ze', english: 'She', usage: 'Third person singular feminine' },
            { dutch: 'Wij/We', english: 'We', usage: 'First person plural' }
          ]
        },
        {
          subtitle: 'Basic Sentence Structure',
          examples: [
            { dutch: 'Ik ben Nederlands', english: 'I am Dutch', usage: 'Simple present tense' },
            { dutch: 'Hij spreekt Engels', english: 'He speaks English', usage: 'Subject-verb-object order' },
            { dutch: 'Zij woont in Amsterdam', english: 'She lives in Amsterdam', usage: 'Location sentences' }
          ]
        }
      ]
    },
    {
        id: 5,
        title: 'Daily Activities',
      description: 'Learn to talk about everyday activities',
      content: [
        {
          subtitle: 'Common Verbs',
          examples: [
            { dutch: 'Eten', english: 'To eat', usage: 'Ik eet een appel (I eat an apple)' },
            { dutch: 'Slapen', english: 'To sleep', usage: 'Ik slaap goed (I sleep well)' },
            { dutch: 'Werken', english: 'To work', usage: 'Ik werk thuis (I work at home)' },
            { dutch: 'Lezen', english: 'To read', usage: 'Ik lees een boek (I read a book)' }
          ]
        },
        {
          subtitle: 'Time Expressions',
          examples: [
            { dutch: 'Nu', english: 'Now', usage: 'Ik werk nu (I am working now)' },
            { dutch: 'Vandaag', english: 'Today', usage: 'Ik ga vandaag naar school (I go to school today)' },
            { dutch: 'Morgen', english: 'Tomorrow', usage: 'Tot morgen (See you tomorrow)' }
          ]
        }
      ]
    },
    {
        id: 6,
        title: 'Useful Questions',
      description: 'Learn how to ask common questions in Dutch',
      content: [
        {
          subtitle: 'Question Words',
          examples: [
            { dutch: 'Wat?', english: 'What?', usage: 'Wat is dat? (What is that?)' },
            { dutch: 'Waar?', english: 'Where?', usage: 'Waar is de winkel? (Where is the shop?)' },
            { dutch: 'Wanneer?', english: 'When?', usage: 'Wanneer kom je? (When are you coming?)' },
            { dutch: 'Waarom?', english: 'Why?', usage: 'Waarom niet? (Why not?)' }
          ]
        },
        {
          subtitle: 'Common Questions',
          examples: [
            { dutch: 'Hoe laat is het?', english: 'What time is it?', usage: 'Asking for the time' },
            { dutch: 'Waar kom je vandaan?', english: 'Where are you from?', usage: 'Asking about origin' },
            { dutch: 'Spreek je Nederlands?', english: 'Do you speak Dutch?', usage: 'Asking about language ability' }
          ]
        }
      ]
    }
  ];

  const progressPercentage = Math.round((completedLessons.length / lessons.length) * 100);

  const navigateToLesson = (direction) => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === selectedLesson.id);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= 0 && nextIndex < lessons.length) {
      setSelectedLesson(lessons[nextIndex]);
      showNotification(`Moved to ${direction === 'next' ? 'next' : 'previous'} lesson: ${lessons[nextIndex].title}`);
    }
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    showNotification(`Opened lesson: ${lesson.title}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 pb-8 px-4">
      {notification && (
        <div 
          className={`fixed top-24 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-100 text-green-800 border-l-4 border-green-500' 
            : 'bg-blue-100 text-blue-800 border-l-4 border-blue-500'
          }`}
        >
          <div className="flex items-center">
          <span className="mr-2 text-xl">
            {notification.type === 'success' ? '✓' : 'i️'}
          </span>
          {notification.message}
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dutch Lessons</h1>
      {!selectedLesson && (
        <div className="w-full max-w-4xl mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Overall Progress</span>
              <span className="text-blue-600 font-medium">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-4xl">
        {selectedLesson ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <button
              onClick={() => setSelectedLesson(null)}
              className="text-blue-600 hover:text-blue-800 flex items-center"
              >
              <span>← Back to lessons</span>
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedLesson.title}</h2>
            {selectedLesson.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{section.subtitle}</h3>
                <div className="grid gap-4">
                  {section.examples.map((example, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium text-blue-600">{example.dutch}</span>
                        <span className="text-gray-600">{example.english}</span>
                      </div>
                      <p className="text-gray-500 text-sm">{example.usage}</p>
                    </div>
                  ))}
                </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
                <button
                onClick={() => navigateToLesson('prev')}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  lessons.findIndex(l => l.id === selectedLesson.id) === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
                disabled={lessons.findIndex(l => l.id === selectedLesson.id) === 0}
                >
                <span className="mr-2">←</span>
                Previous Lesson
                </button>
                <button
                onClick={() => toggleLessonCompletion(selectedLesson.id)}
                className={`px-4 py-2 rounded-lg mx-4 ${
                  completedLessons.includes(selectedLesson.id)
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                >
                {completedLessons.includes(selectedLesson.id) ? 'Completed ✓' : 'Mark as Complete'}
                </button>
                <button
                onClick={() => navigateToLesson('next')}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  lessons.findIndex(l => l.id === selectedLesson.id) === lessons.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
                disabled={lessons.findIndex(l => l.id === selectedLesson.id) === lessons.length - 1}
                >
                Next Lesson
                <span className="ml-2">→</span>
                </button>
              </div>
              </div>
        ) : (
          <div className="grid gap-6">
            {lessons.map((lesson) => (
                <div
                key={lesson.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleLessonSelect(lesson)}
                >
                <div className="flex justify-between items-center">
                  <div>
                  <h2 className="text-xl font-semibold text-blue-800 mb-2">{lesson.title}</h2>
                  <p className="text-gray-600">{lesson.description}</p>
                  </div>
                    <button
                    onClick={(e) => toggleLessonCompletion(lesson.id, e)}
                    className={`ml-4 p-2 rounded-full transition-colors ${
                      completedLessons.includes(lesson.id)
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    >
                    {completedLessons.includes(lesson.id) ? '✓' : '○'}
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
