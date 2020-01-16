import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import useStyles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes, deletePalette }) => {
  const classes = useStyles();
  const history = useHistory();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              deletePalette={deletePalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteList;
