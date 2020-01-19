import React, { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import useStyles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const PaletteList = ({ palettes, deletePalette }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletePaletteId, setDeletePaletteId] = useState('');

  const openDialog = id => {
    setOpenDeleteDialog(true);
    setDeletePaletteId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = () => {
    deletePalette(deletePaletteId);
    closeDialog();
  };

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const miniPalettes = palettes.map(palette => (
    <CSSTransition
      key={palette.id}
      location={location}
      classNames="fade"
      timeout={500}
    >
      <MiniPalette
        key={palette.id}
        {...palette}
        goToPalette={goToPalette}
        openDeleteDialog={openDialog}
      />
    </CSSTransition>
  ));

  console.log('PaletteList renders');

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {miniPalettes}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default PaletteList;
