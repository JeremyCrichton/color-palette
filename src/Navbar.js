import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

import { Select, MenuItem } from '@material-ui/core';

const Navbar = ({ level, handleChangeLevel, changeFormat }) => {
  const [format, setFormat] = useState('hex');

  const handleChangeFormat = e => {
    setFormat(e.target.value);
    changeFormat(e.target.value);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#!">colorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleChangeLevel}
            handleStyle={{
              backgroundColor: 'green',
              outline: 'none',
              border: '2px solid green',
              boxShadow: 'none',
              width: '13px',
              height: '13px',
              marginLeft: '7px',
              marignTop: '-3px'
            }}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChangeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA -rgba(255,255,255, 0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;
