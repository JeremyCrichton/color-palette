import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel }) => {
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
            onAfterChange={changeLevel}
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
    </header>
  );
};

export default Navbar;
