// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
// import React from "react";

// interface ThemeToggleProps {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }

// const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
//   return (
//     <button onClick={toggleTheme} aria-label="Toggle Dark/Light Mode">
//       {isDarkMode ? (
//         <SunIcon className="h-6 w-6 text-yellow-400" />
//       ) : (
//         <MoonIcon className="h-6 w-6 text-gray-700" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;

// app/components/DarkModeToggle.tsx
// import { useState } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p-2 hover:bg-gray-200 rounded-full"
//       aria-label="Toggle Dark Mode"
//     >
//       {darkMode ? (
//         <SunIcon className="h-6 w-6 text-yellow-500" />
//       ) : (
//         <MoonIcon className="h-6 w-6 text-gray-700" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;
// app/components/DarkModeToggle.tsx
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 hover:bg-gray-200 rounded-full"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
