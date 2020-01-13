import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import seedColors from './seedColors';
import { findPalette, generatePalette, gatherShades } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

const SingleColorPalette = () => {
  const [format, setFormat] = useState('hex');
  const { paletteId, colorId } = useParams();

  const palette = generatePalette(findPalette(paletteId, seedColors));
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
      <div className="SingleColorPalette Palette">
        <Navbar showSlider={false} changeFormat={changeFormat} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox go-back">
            <Link to={`/palette/${paletteId}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
      </div>
    </>
  );
};

export default SingleColorPalette;
