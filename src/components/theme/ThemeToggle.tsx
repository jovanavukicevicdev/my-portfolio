'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { motion } from 'framer-motion';
import MoonIcon from 'remixicon-react/MoonFillIcon';
import SunIcon from 'remixicon-react/SunFillIcon';

interface ThemeToggleProps {
  children: ReactNode;
}

const ThemeToggle = ({ children }: ThemeToggleProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const addDarkTheme = () => {
    mainRef.current?.classList.add('dark');
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    mainRef.current?.classList.remove('dark');
    setDarkTheme(false);
  };

  const toggleDarkTheme = () => {
    if (darkTheme) {
      removeDarkTheme();
      reactLocalStorage.set('darkTheme', false);
    } else {
      addDarkTheme();
      reactLocalStorage.set('darkTheme', true);
    }
  };

  useEffect(() => {
    const darkTheme: string = reactLocalStorage.get('darkTheme');
    const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);

    const systemTheme =
      typeof window !== undefined && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkTheme === undefined) {
      // User hasn't set the preference, and we check the system theme
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      systemTheme ? addDarkTheme() : removeDarkTheme();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      darkThemeParsed ? addDarkTheme() : removeDarkTheme();
    }
  }, []);

  return (
    <main ref={mainRef}>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div
          className="max-w-[1200px] max-xl:w-full mx-auto flex justify-center
                     max-xl:px-[90px] max-sm:pl-[80px] max-sm:pr-5 overflow-hidden"
        >
          <button
            onClick={toggleDarkTheme}
            className="fixed right-14 max-sm:right-10 top-10 text-burnt-sienna-400 hover:text-burnt-sienna-500 z-40"
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-gray-50 p-1 cursor-pointer dark:bg-gray-900 text-4xl"
            >
              <SunIcon />
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-gray-50 p-1 cursor-pointer dark:bg-gray-900 text-3xl"
            >
              <MoonIcon />
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default ThemeToggle;
