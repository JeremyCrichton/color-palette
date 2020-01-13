import React from 'react';
import { useParams } from 'react-router-dom';

const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();
  return (
    <h2>
      Single Color Palette {paletteId} | {colorId}
    </h2>
  );
};

export default SingleColorPalette;
