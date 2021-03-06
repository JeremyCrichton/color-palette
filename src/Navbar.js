import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import useStyles from './styles/NavbarStyles';

const Navbar = ({ level, handleChangeLevel, changeFormat, showSlider }) => {
  const [format, setFormat] = useState('hex');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const classes = useStyles();

  const handleChangeFormat = e => {
    setFormat(e.target.value);
    setSnackbarOpen(true);
    changeFormat(e.target.value);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">colorpicker</Link>
      </div>
      {showSlider && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
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
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleChangeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA -rgba(255,255,255, 0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
};

export default Navbar;
