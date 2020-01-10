import React, { useState } from 'react';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = props => {
  const [level, setLevel] = useState(500);

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox key={color.hex} background={color.hex} name={color.name} />
  ));

  const handleChangeLevel = lev => {
    console.log(lev);
    setLevel(lev);
  };

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={handleChangeLevel} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
