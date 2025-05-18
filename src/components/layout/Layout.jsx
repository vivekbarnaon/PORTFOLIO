import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaMoon, FaSun } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');

    // If no preference is saved, default to dark mode
    // If preference is saved, use that preference
    const isDarkMode = savedMode === null ? true : savedMode === 'true';

    setDarkMode(isDarkMode);

    // Apply dark mode class to body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the initial preference if not already saved
    if (savedMode === null) {
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 shadow-xl z-10 transition-colors border border-gray-100 dark:border-gray-700"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default Layout;
