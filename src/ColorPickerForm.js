import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  colorNameInput: {
    width: '100%',
    height: '70px'
  }
});

const ColorPickerForm = ({ addNewColor, paletteIsFull, colors }) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState('black');
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(({ color }) => color !== currentColor)
    );
  });

  // TODO: Combine these w/ custom hook??
  const handleColorNameChange = e => {
    setNewColorName(e.target.value);
  };
  const handleChangeColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleAddNewColor = () => {
    addNewColor({ color: currentColor, name: newColorName });
    setNewColorName('');
  };

  return (
    <div>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={newColor => {
          handleChangeColor(newColor);
        }}
      />
      <ValidatorForm onSubmit={handleAddNewColor}>
        <TextValidator
          value={newColorName}
          name="newColorName"
          variant="filled"
          margin="normal"
          className={classes.colorNameInput}
          placeholder="Color name"
          onChange={handleColorNameChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color must be unique'
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.addColor}
          style={{
            backgroundColor: paletteIsFull ? 'lightgrey' : currentColor
          }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
