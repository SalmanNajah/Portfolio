import { IconMoon, IconSun } from '@tabler/icons-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [rotation, setRotation] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setRotation((prev) => prev - 180);
  };

  return (
    <button onClick={toggleTheme} className="text-black dark:text-white cursor-pointer rounded-full shadow-standard p-2">
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <IconSun className="w-5 h-5" />
        ) : (
          <IconMoon className="w-5 h-5" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
