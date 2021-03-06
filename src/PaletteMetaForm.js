import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const PaletteMetaForm = ({ palettes, handleSavePalette, hideForm }) => {
  const [stage, setStage] = useState('form');
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

  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const savePalette = emoji => {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    };
    handleSavePalette(newPalette);
  };

  return (
    <>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id="emoji-form-dialog-title">Choose an Emoji!</DialogTitle>
        <Picker
          onSelect={savePalette}
          title="Pick a palette emoji!"
          darkMode={false}
        />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
    </>
  );
};

export default PaletteMetaForm;
