import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-8 mt-auto">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">Dutch Learning</h3>
						<p className="text-gray-400">Learn Dutch language effectively with our interactive lessons, quizzes, and vocabulary tools.</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li><Link to="/lessons" className="text-gray-400 hover:text-white">Lessons</Link></li>
							<li><Link to="/quiz" className="text-gray-400 hover:text-white">Quiz</Link></li>
							<li><Link to="/vocabulary" className="text-gray-400 hover:text-white">Vocabulary</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<p className="text-gray-400">Have questions? Contact us at:</p>
						<p className="text-gray-400">support@dutchlearning.com</p>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
					<p>© {currentYear} Dutch Learning. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;