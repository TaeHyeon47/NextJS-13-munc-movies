'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

// this theme provider because is using the context, we cannot use it as a server side.
export default function Providers({ children }) {
  // 1. enableSystem = true: Whether to switch between dark and light based on prefers-color-scheme
  // 2. attribute = 'data-theme': HTML attribute modified based on the active theme accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  );
}
