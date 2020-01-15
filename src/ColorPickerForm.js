import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ColorPickerForm = ({ addNewColor, paletteIsFull, colors }) => {
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
        color={currentColor}
        onChangeComplete={newColor => {
          handleChangeColor(newColor);
        }}
      />
      <ValidatorForm onSubmit={handleAddNewColor}>
        <TextValidator
          value={newColorName}
          name="newColorName"
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
