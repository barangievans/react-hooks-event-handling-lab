// components/Keypad.js
import React from 'react';

const Keypad = () => {
  // Handler for when the input value changes
  const handleChange = (event) => {
    console.log('Entering password...');
  };

  return (
    <input
      type="password"     // Set input type to password
      onChange={handleChange} // Attach the change event handler
    />
  );
};

export default Keypad;
