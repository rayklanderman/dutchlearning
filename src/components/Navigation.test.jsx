import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
	const renderNavigation = () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		);
	};

	it('renders all navigation links', () => {
		renderNavigation();
		
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Lessons')).toBeInTheDocument();
		expect(screen.getByText('Quiz')).toBeInTheDocument();
		expect(screen.getByText('Vocabulary')).toBeInTheDocument();
	});

	it('has correct links for each navigation item', () => {
		renderNavigation();
		
		expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
		expect(screen.getByText('Lessons').closest('a')).toHaveAttribute('href', '/lessons');
		expect(screen.getByText('Quiz').closest('a')).toHaveAttribute('href', '/quiz');
		expect(screen.getByText('Vocabulary').closest('a')).toHaveAttribute('href', '/vocabulary');
	});

	it('applies correct styling classes', () => {
		renderNavigation();
		const nav = screen.getByRole('navigation');
		expect(nav).toHaveClass('bg-blue-600', 'fixed', 'top-0', 'w-full');
	});
});