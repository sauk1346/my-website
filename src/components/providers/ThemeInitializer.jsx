'use client';
import { useEffect } from 'react';

export function ThemeInitializer() {
  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove('dark-mode', 'dark-mode-override', 'light-mode-override');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark') el.classList.add('dark-mode-override');
    else if (savedTheme === 'light') el.classList.add('light-mode-override');
    else if (prefersDark) el.classList.add('dark-mode');
  }, []);
  return null;
}
