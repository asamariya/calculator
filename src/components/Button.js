import React from 'react';

const Button = ({ label, handleClick }) => {
  return (
    <div>
      <input onClick={handleClick} type="button" value={label} />
    </div>
  );
};

export default Button;
