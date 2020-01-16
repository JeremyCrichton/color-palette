import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteMetaForm = ({ palettes, handleSavePalette, hideForm }) => {
  const [open, setOpen] = useState(true);
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  });

  const handlePaletteNameChange = e => {
    setNewPaletteName(e.target.value);
  };

  return (
    <Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSavePalette(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette.
          </DialogContentText>
          <TextValidator
            value={newPaletteName}
            label="Palette Name"
            name="newPaletteName"
            fullWidth
            margin="normal"
            onChange={handlePaletteNameChange}
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={[
              'Enter a color name',
              'Palette name must be unique'
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
