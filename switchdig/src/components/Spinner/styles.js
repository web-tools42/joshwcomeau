import { StyleSheet } from 'aphrodite/no-important';
import { orange, gray500 } from '../../constants/colors';

const keyframes = {
  '0%': {
    transform: 'rotate(0deg)',
  },

  '100%': {
    transform: 'rotate(720deg)',
  },
};

export default StyleSheet.create({
  spinnerContainer: {
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '5px solid #EEEEEE',
    borderTopColor: orange,
    borderBottomColor: gray500,
    animationName: keyframes,
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.65, 0, 0.2, 1)',
  },
});
