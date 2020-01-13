import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white'
    }
  }
};

const MiniPalette = props => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <h2>Mini Palette</h2>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
