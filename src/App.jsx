import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import WelcomeAnimation from './components/WelcomeAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Tournaments from './components/Tournaments';
import News from './components/News';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence>
          {showWelcome && (
            <WelcomeAnimation onComplete={handleWelcomeComplete} />
          )}
        </AnimatePresence>

        {!showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Games />
              <Tournaments />
              <News />
              <Registration />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;