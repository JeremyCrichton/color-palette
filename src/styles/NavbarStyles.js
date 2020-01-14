import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: 15,
    padding: '0 13px',
    fontSize: 22,
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  slider: {
    width: 340,
    margin: '0 10px',
    display: 'inline-block'
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
});
