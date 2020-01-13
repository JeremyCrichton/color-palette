import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

import './ColorBox.css';

const ColorBox = ({ background, name, colorId, paletteId, showLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.7;

  return (
    <CopyToClipboard text={background} onCopy={handleCopyState}>
      <div style={{ background }} className="ColorBox">
        {/* Use a separate div here instead of growing the parent because that would grow the contents too */}
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={isLightColor ? 'dark-text' : undefined}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? 'light-text' : undefined}>
              {name}
            </span>
          </div>
          <button
            className={`copy-button ${isLightColor ? 'dark-text' : undefined}`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={e => e.stopPropagation()}
          >
            <span
              className={`see-more ${isLightColor ? 'dark-text' : undefined}`}
            >
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
