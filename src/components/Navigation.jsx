import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="bg-blue-600 p-4 shadow-md fixed top-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="flex items-center space-x-2">
					<div className="bg-white text-blue-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md">
						DL
					</div>
					<span className="text-white font-bold text-xl hidden md:block">Dutch Learning</span>
				</Link>
				<div className="flex space-x-4">
					<Link to="/" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">Home</Link>
					<Link to="/lessons" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">Lessons</Link>
					<Link to="/quiz" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">Quiz</Link>
					<Link to="/vocabulary" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">Vocabulary</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;