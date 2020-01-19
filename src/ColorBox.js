import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';

import useStyles from './styles/ColorBoxStyles';

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
          className={clsx(classes.copyOverlay, copied && classes.showOverlay)}
        />
        <div
          className={clsx(
            classes.copyMessage,
            copied && classes.showCopyMessage
          )}
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
