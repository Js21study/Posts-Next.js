'use client';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

enum ThemeVariations {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeVariations>(ThemeVariations.LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeVariations;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeVariations.LIGHT
        ? ThemeVariations.DARK
        : ThemeVariations.LIGHT;

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const themesButtonOutputs: Record<ThemeVariations, ReactElement> = useMemo(
    () => ({
      dark: (
        <>
          Dark <MdDarkMode />
        </>
      ),

      light: (
        <>
          Light <MdOutlineDarkMode />
        </>
      ),
    }),
    []
  );

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 border rounded border-sky-950 dark:border-slate-200">
      <span className="flex items-center gap-2">
        {themesButtonOutputs[theme]}
      </span>
      Mode
    </button>
  );
};
