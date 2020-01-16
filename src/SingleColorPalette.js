import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { findPalette, generatePalette, gatherShades } from './colorHelpers';
import useStyles from './styles/PaletteStyles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const SingleColorPalette = ({ palettes }) => {
  const [format, setFormat] = useState('hex');
  const { paletteId, colorId } = useParams();
  const classes = useStyles();

  const palette = generatePalette(findPalette(paletteId, palettes));
  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  const changeFormat = fmt => {
    setFormat(fmt);
  };

  return (
    <>
      <div className={classes.Palette}>
        <Navbar showSlider={false} changeFormat={changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${paletteId}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    </>
  );
};

export default SingleColorPalette;
