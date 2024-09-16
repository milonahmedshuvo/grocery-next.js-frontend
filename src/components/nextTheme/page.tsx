"use client"
// import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg ">
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      {/* {theme === 'dark' ? <Switch defaultSelected> </Switch> : <Switch defaultSelected> </Switch>} */}
    </button>
  );
};

export default ThemeToggle;
