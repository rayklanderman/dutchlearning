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
      question: 'How do you say "Water" in Dutch?',
      options: ['Agua', 'Water', 'Eau', 'Wasser'],
      correct: 1
    },
    {
      question: 'What is "Coffee" in Dutch?',
      options: ['Café', 'Koffie', 'Caffè', 'Kaffee'],
      correct: 1
    },
    {
      question: 'How do you say "Bread" in Dutch?',
      options: ['Pan', 'Brood', 'Pain', 'Brot'],
      correct: 1
    },
    {
      question: 'What is "Cheese" in Dutch?',
      options: ['Fromage', 'Kaas', 'Queso', 'Käse'],
      correct: 1
    },
    {
      question: 'How do you say "Milk" in Dutch?',
      options: ['Lait', 'Melk', 'Leche', 'Milch'],
      correct: 1
    },
    {
      question: 'What is "Apple" in Dutch?',
      options: ['Pomme', 'Appel', 'Manzana', 'Apfel'],
      correct: 1
    },
    {
      question: 'How do you say "Sandwich" in Dutch?',
      options: ['Sandwich', 'Boterham', 'Sandwich', 'Sandwich'],
      correct: 1
    },
    {
      question: 'What is "Red" in Dutch?',
      options: ['Rouge', 'Rood', 'Rojo', 'Rot'],
      correct: 1
    },
    {
      question: 'How do you say "Blue" in Dutch?',
      options: ['Bleu', 'Blauw', 'Azul', 'Blau'],
      correct: 1
    },
    {
      question: 'What is "Green" in Dutch?',
      options: ['Vert', 'Groen', 'Verde', 'Grün'],
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
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  if (showScore) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6 max-w-lg w-full">
          <h2 className="text-3xl font-bold text-gray-800">Quiz Complete!</h2>
          <p className="text-xl text-gray-600">
            You scored {score} out of {questions.length} ({(score / questions.length * 100).toFixed(0)}%)
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${(score / questions.length * 100).toFixed(0)}%` }}
            ></div>
          </div>
          <div className="text-lg text-gray-600">
            {score === questions.length ? (
              <p>Perfect score! You're a Dutch language master! 🎉</p>
            ) : score >= questions.length * 0.9 ? (
              <p>Excellent! You're almost perfect! 🌟</p>
            ) : score >= questions.length * 0.7 ? (
              <p>Great job! Keep practicing to improve further! 👏</p>
            ) : score >= questions.length * 0.5 ? (
              <p>Good effort! You're making progress! 💪</p>
            ) : (
              <p>Keep practicing! You'll get better with time! 📚</p>
            )}
          </div>
          <button
            onClick={restartQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dutch Language Quiz</h1>
        <div className="text-lg font-medium text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-800">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
                className={`p-4 text-left rounded-lg border transition-all ${showFeedback
                  ? index === questions[currentQuestion].correct
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'bg-red-100 border-red-500 text-red-700'
                  : 'hover:bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-500'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isCorrect ? 'Correct! 🎉' : 'Incorrect. Try again! 💪'}
          </div>
        )}

        <div className="flex justify-between items-center text-sm text-gray-600">
          <div>Score: {score}</div>
          <div>Progress: {Math.round((currentQuestion / questions.length) * 100)}%</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${((currentQuestion + 1) / questions.length * 100).toFixed(0)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
