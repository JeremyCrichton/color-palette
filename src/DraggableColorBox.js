import React from 'react';
import useStyles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = ({ color }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

export default DraggableColorBox;
