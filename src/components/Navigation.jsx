import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className="bg-blue-600 p-4 shadow-md fixed top-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="flex items-center space-x-2">
					<div className="bg-white text-blue-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md">
						DL
					</div>
					<span className="text-white font-bold text-xl hidden md:block">Dutch Learning</span>
				</Link>

				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
				>
					<svg
						className={`fill-current h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>

				<div
					className={`md:flex md:items-center md:space-x-4 absolute md:static bg-blue-600 p-4 md:p-0 shadow-md md:shadow-none right-4 top-16 md:right-0 md:top-0 ${
						isMobileMenuOpen ? 'block' : 'hidden'
					}`}
				>
					<Link to="/" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors block md:inline-block">Home</Link>
					<Link to="/lessons" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors block md:inline-block">Lessons</Link>
					<Link to="/quiz" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors block md:inline-block">Quiz</Link>
					<Link to="/vocabulary" className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors block md:inline-block">Vocabulary</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;