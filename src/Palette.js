import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();

  const findPalette = pid => {
    return seedColors.find(palette => palette.id === pid);
  };

  const palette = generatePalette(findPalette(id));

  const changeLevel = lev => {
    setLevel(lev);
  };

  const changeFormat = fmt => {
    setFormat(fmt);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      colorId={color.id}
      paletteId={id}
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
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
