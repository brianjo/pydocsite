import React, { useState } from 'react';
const FlashingCircle = () => {
  const [color, setColor] = useState('green');
  const handleClick = () => {
    if (color === 'green') {
      setColor('yellow');
    } else if (color === 'yellow') {
      setColor('red');
    } else {
      setColor('green');
    }
  };
  return (
    <div style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: color }} onClick={handleClick} />
  );
};
export default FlashingCircle;