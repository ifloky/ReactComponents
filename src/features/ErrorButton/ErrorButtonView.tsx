import React, { useState } from 'react';

const ErrorButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = () => {
  const [throwError, setThrowError] = useState(false);

  const handleClick = () => {
    setThrowError(true);
  };

  if (throwError) {
    throw new Error('This is a simulated error');
  }

  return (
    <>
      <button className="error-btn" onClick={handleClick}>
        Throw Error
      </button>
    </>
  );
};

export default ErrorButton;
