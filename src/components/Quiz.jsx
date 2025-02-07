import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: 'How do you say "Hello" in Dutch?',
      options: ['Hallo', 'Bonjour', 'Hola', 'Ciao'],
      correct: 0
    },
    {
      question: 'What is "Thank you" in Dutch?',
      options: ['Grazie', 'Merci', 'Dank je wel', 'Gracias'],
      correct: 2
    },
    {
      question: 'How do you say "Good morning" in Dutch?',
      options: ['Goedemorgen', 'Bon matin', 'Buenos días', 'Good morning'],
      correct: 0
    },
    {
      question: 'What is "Goodbye" in Dutch?',
      options: ['Au revoir', 'Doei', 'Adiós', 'Bye'],
      correct: 1
    },
    {
      question: 'How do you say "Please" in Dutch?',
      options: ['Por favor', 'Alstublieft', 'S\'il vous plaît', 'Please'],
      correct: 1
    },
    {
      question: 'What is "Yes" in Dutch?',
      options: ['Si', 'Oui', 'Ja', 'Yes'],
      correct: 2
    },
    {
      question: 'How do you say "No" in Dutch?',
      options: ['Non', 'Nee', 'No', 'Nein'],
      correct: 1
    },
    {
      question: 'What is "Good evening" in Dutch?',
      options: ['Goedenavond', 'Bonsoir', 'Buenas noches', 'Good evening'],
      correct: 0
    },
    {
      question: 'How do you say "How are you?" in Dutch?',
      options: ['Comment allez-vous?', 'Hoe gaat het?', '¿Cómo estás?', 'How are you?'],
      correct: 1
    },
    {
      question: 'What is "Welcome" in Dutch?',
      options: ['Bienvenue', 'Welkom', 'Bienvenido', 'Welcome'],
      correct: 1
    },
    {
      question: 'How do you say "Good night" in Dutch?',
      options: ['Bonne nuit', 'Welterusten', 'Buenas noches', 'Good night'],
      correct: 1
    },
    {
      question: 'What is "Sorry" in Dutch?',
      options: ['Sorry', 'Pardon', 'Het spijt me', 'All of these'],
      correct: 3
    },
    {
      question: 'How do you say "What is your name?" in Dutch?',
      options: ['Wat is je naam?', 'Comment tu t\'appelles?', '¿Cómo te llamas?', 'What\'s your name?'],
      correct: 0
    },
    {
      question: 'What is "Water" in Dutch?',
      options: ['Eau', 'Agua', 'Water', 'Wasser'],
      correct: 2
    },
    {
      question: 'How do you say "I don\'t understand" in Dutch?',
      options: ['Ik begrijp het niet', 'Je ne comprends pas', 'No entiendo', 'I don\'t understand'],
      correct: 0
    },
    {
      question: 'What is "Excuse me" in Dutch?',
      options: ['Excusez-moi', 'Pardon', 'Perdón', 'Sorry'],
      correct: 1
    },
    {
      question: 'How do you say "Good afternoon" in Dutch?',
      options: ['Bon après-midi', 'Goedemiddag', 'Buenas tardes', 'Good afternoon'],
      correct: 1
    },
    {
      question: 'What is "My name is..." in Dutch?',
      options: ['Je m\'appelle...', 'Ik heet...', 'Me llamo...', 'My name is...'],
      correct: 1
    },
    {
      question: 'How do you say "Nice to meet you" in Dutch?',
      options: ['Enchanté', 'Aangenaam', 'Mucho gusto', 'Nice to meet you'],
      correct: 1
    },
    {
      question: 'What is "See you later" in Dutch?',
      options: ['À plus tard', 'Tot ziens', 'Hasta luego', 'See you'],
      correct: 1
    }
  ];

  const handleAnswerClick = (selectedOption) => {
    const correct = selectedOption === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  const handleSkip = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowFeedback(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 pb-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dutch Quiz</h1>
      {showScore ? (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">Your score: {score} out of {questions.length}</p>
          <button
            onClick={resetQuiz}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-gray-600">Score: {score}</span>
          </div>
          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          {showFeedback && (
            <div className={`p-4 mb-6 rounded-lg text-center ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <p className="font-semibold mb-1">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              {!isCorrect && (
                <p>The correct answer is: {questions[currentQuestion].options[questions[currentQuestion].correct]}</p>
              )}
            </div>
          )}
          <div className="grid gap-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors disabled:opacity-50"
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSkip}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
              disabled={showFeedback}
            >
              Skip Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
