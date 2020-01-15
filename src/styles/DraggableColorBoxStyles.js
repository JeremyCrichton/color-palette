import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all .3s ease-in-out'
  }
});
