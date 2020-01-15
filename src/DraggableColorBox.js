import React from 'react';
import useStyles from './styles/DraggableColorBoxStyles';

import DeleteIcon from '@material-ui/icons/Delete';

const DraggableColorBox = ({ color, name, id, deleteColor }) => {
  const classes = useStyles();

  const handleDeleteColor = () => {
    deleteColor(name);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={handleDeleteColor}
        />
      </div>
    </div>
  );
};

export default DraggableColorBox;
