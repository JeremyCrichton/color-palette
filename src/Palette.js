import React from 'react';
import ColorBox from './ColorBox';

import './Palette.css';

const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox key={color.color} background={color.color} name={color.name} />
  ));

  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
