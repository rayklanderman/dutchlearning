import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">Dutch Learning</span>!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start your journey to learn Dutch today with our interactive lessons, quizzes, and comprehensive vocabulary tools.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <Link to="/lessons" className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Lessons</h2>
          <p className="text-blue-600">Master Dutch with our structured lessons and track your progress</p>
        </Link>
        <Link to="/quiz" className="bg-green-100 hover:bg-green-200 p-6 rounded-lg shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Quiz</h2>
          <p className="text-green-600">Test your knowledge with interactive quizzes and instant feedback</p>
        </Link>
        <Link to="/vocabulary" className="bg-purple-100 hover:bg-purple-200 p-6 rounded-lg shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-purple-800 mb-3">Vocabulary</h2>
          <p className="text-purple-600">Build your Dutch vocabulary with categorized word lists</p>
        </Link>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Learn Dutch with Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div className="p-4">
            <div className="text-blue-600 text-4xl mb-4">📚</div>
            <h4 className="text-lg font-semibold mb-2">Structured Learning</h4>
            <p className="text-gray-600">Progressive lessons designed for effective learning</p>
          </div>
          <div className="p-4">
            <div className="text-green-600 text-4xl mb-4">✓</div>
            <h4 className="text-lg font-semibold mb-2">Interactive Practice</h4>
            <p className="text-gray-600">Engaging quizzes with immediate feedback</p>
          </div>
          <div className="p-4">
            <div className="text-purple-600 text-4xl mb-4">🔤</div>
            <h4 className="text-lg font-semibold mb-2">Rich Vocabulary</h4>
            <p className="text-gray-600">Comprehensive word lists with pronunciations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
