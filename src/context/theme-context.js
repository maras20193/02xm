'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Tworzenie kontekstu
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Opcjonalnie: zapisanie preferencji motywu w localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Przywrócenie motywu z localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook do używania kontekstu
export const useTheme = () => useContext(ThemeContext);
