import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button aria-label="Toggle" onClick={handleToggle}>
      {darkMode ? "Light" : "Dark"} 
    </button>
  );
};

export default DarkModeToggle;