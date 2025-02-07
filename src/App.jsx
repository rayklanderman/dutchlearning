import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = lazy(() => import('./components/Home'));
const Lessons = lazy(() => import('./components/Lessons'));
const Quiz = lazy(() => import('./components/Quiz'));
const Vocabulary = lazy(() => import('./components/Vocabulary'));

const App = () => {
  return (
    <Router>  
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <main className="container mx-auto flex-grow px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

