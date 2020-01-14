import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import seedColors from './seedColors';
import { findPalette, generatePalette, gatherShades } from './colorHelpers';
import useStyles from './styles/PaletteStyles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   Palette: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   colors: {
//     height: '90%'
//   },
//   goBack: {
//     width: '20%',
//     height: '50%',
//     display: 'inline-block',
//     position: 'relative',
//     marginBottom: '-3.5px',
//     cursor: 'pointer',
//     opacity: 1,
//     backgroundColor: 'black',
//     '& a': {
//       color: 'white',
//       width: '100px',
//       height: '30px',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       marginLeft: '-50px',
//       marginTop: '-15px',
//       outline: 'none',
//       background: 'rgba(255, 255, 255, 0.3)',
//       fontSize: '1rem',
//       lineHeight: '30px',
//       textTransform: 'uppercase',
//       textDecoration: 'none',
//       textAlign: 'center',
//       border: 'none',
//       cursor: 'pointer'
//     }
//   }
// });

const SingleColorPalette = () => {
  const [format, setFormat] = useState('hex');
  const { paletteId, colorId } = useParams();
  const classes = useStyles();

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
