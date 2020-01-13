import React from 'react';
import { useParams } from 'react-router-dom';

import seedColors from './seedColors';
import { findPalette, generatePalette, gatherShades } from './colorHelpers';
import ColorBox from './ColorBox';

const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();
  const palette = generatePalette(findPalette(paletteId, seedColors));
  const shades = gatherShades(palette, colorId);
  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>
        Single Color Palette {paletteId} | {colorId}
      </h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
