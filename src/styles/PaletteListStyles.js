import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: '1px solid white'
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {},
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
});
