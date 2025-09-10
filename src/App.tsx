import React from 'react';
import { Navbar, Hero, About, Projects, Contact, Footer } from './components';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
