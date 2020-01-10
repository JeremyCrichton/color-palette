import React, { useState } from 'react';
import Slider from 'rc-slider';
import './Palette.css';

import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';

const Palette = props => {
  const [level, setLevel] = useState(500);

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox key={color.hex} background={color.hex} name={color.name} />
  ));

  const handleChangeLevel = lev => {
    console.log(lev);
    setLevel(lev);
  };

  return (
    <div className="Palette">
      {/* Navbar goes here */}
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
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
