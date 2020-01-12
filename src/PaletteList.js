import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <Link key={palette.id} to={`/palette/${palette.id}`}>
          {palette.paletteName}
        </Link>
      ))}
    </div>
  );
};

export default PaletteList;
