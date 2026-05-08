import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-lg backdrop-blur-[20px] transition-all duration-300 hover:scale-105"
      style={{
        background: 'var(--glass-fill)',
        border: '1px solid var(--glass-border)',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.14)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} style={{ color: 'var(--text-primary)' }} />
      ) : (
        <Moon size={20} style={{ color: 'var(--text-primary)' }} />
      )}
    </button>
  );
}
