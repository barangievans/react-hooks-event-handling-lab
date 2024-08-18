// components/EyesOnMe.js
import React from 'react';

const EyesOnMe = () => {
  // Handler for when the button gains focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Handler for when the button loses focus
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button
      onFocus={handleFocus} // Attach the focus event handler
      onBlur={handleBlur}   // Attach the blur event handler
    >
      Eyes on me
    </button>
  );
};

export default EyesOnMe;
