import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { generatePalette, findPalette } from './colorHelpers';
import useStyles from './styles/PaletteStyles';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

const Palette = ({ palettes }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();
  const palette = generatePalette(findPalette(id, palettes));

  const classes = useStyles();

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
    <div className={classes.Palette}>
      <Navbar
        level={level}
        handleChangeLevel={changeLevel}
        changeFormat={changeFormat}
        showSlider
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default Palette;
