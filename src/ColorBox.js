import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { makeStyles } from '@material-ui/core/styles';

import './ColorBox.css';

const useStyles = makeStyles({
  ColorBox: {
    width: '20%',
    height: ({ showingFullPalette }) =>
      showingFullPalette === true ? '25%' : '50%',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
    }
  },
  copyText: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: ({ background }) =>
      chroma(background).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,.6)' : 'white',
    bakcground: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    opacity: 0
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    /* add height and with so scale has something to scale from */
    height: '100%',
    width: '100%',
    transition: 'transform 0.6s ease-in-out',
    /* Make it really small so it grows from the very center */
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showCopyMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
});

const ColorBox = ({
  background,
  name,
  colorId,
  paletteId,
  showingFullPalette
}) => {
  const [copied, setCopied] = useState(false);
  const classes = useStyles({ background, showingFullPalette });

  const handleCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        {/* Use a separate div here instead of growing the parent because that would grow the contents too */}
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${copied &&
            classes.showCopyMessage}`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={e => e.stopPropagation()}
          >
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
