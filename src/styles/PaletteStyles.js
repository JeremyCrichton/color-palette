import { makeStyles } from '@material-ui/core/styles';

import sizes from './sizes';

export default makeStyles({
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    opacity: 1,
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      textAlign: 'center',
      border: 'none',
      cursor: 'pointer'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33333%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '10%'
    }
  }
});
