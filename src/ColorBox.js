import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
