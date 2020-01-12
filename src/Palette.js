import React, { useState } from 'react';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = props => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = lev => {
    setLevel(lev);
  };

  const changeFormat = fmt => {
    setFormat(fmt);
  };

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox
      key={color[format]}
      background={color[format]}
      name={color.name}
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        handleChangeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
