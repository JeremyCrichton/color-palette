import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import seedColors from './seedColors';
import { generatePalette, findPalette } from './colorHelpers';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';
import './Palette.css';

const Palette = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();
  const palette = generatePalette(findPalette(id, seedColors));

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
      showingFullPalette
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        handleChangeLevel={changeLevel}
        changeFormat={changeFormat}
        showSlider
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default Palette;
