import React, { memo } from 'react';
import useStyles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = ({
  paletteName,
  emoji,
  colors,
  goToPalette,
  openDeleteDialog,
  id
}) => {
  const classes = useStyles();
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  const handleClick = () => {
    goToPalette(id);
  };

  const handleClickDelete = e => {
    e.stopPropagation();
    openDeleteDialog(id);
  };

  console.log('Rendering: ', paletteName);

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={handleClickDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default memo(MiniPalette);
