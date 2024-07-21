'use client';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;