import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(null); // Domyślnie nie ustalamy żadnego motywu
  const [mounted, setMounted] = useState(false); // Dodajemy zmienną, aby wiedzieć, czy komponent jest zamontowany

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }

    setMounted(true); // Ustawiamy, że komponent jest zamontowany
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme, mounted };
}
