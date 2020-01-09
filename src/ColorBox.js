import React from 'react';

import './ColorBox.css';

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ background }} className="ColorBox">
      <h2>{name}</h2>
    </div>
  );
};

export default ColorBox;
