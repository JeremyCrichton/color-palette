import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
import bg from './bg.svg';

export default makeStyles({
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#000022',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflow: 'scroll'
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: '1px solid white',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '70%'
    }
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: 'white'
    }
  },
  title: {
    fontSize: '2rem'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem'
    }
  }
});
