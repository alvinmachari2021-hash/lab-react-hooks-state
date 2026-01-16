import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default DarkModeToggle;