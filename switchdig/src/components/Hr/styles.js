import { StyleSheet } from 'aphrodite/no-important';

import { gray500, gray300 } from '../../constants/colors';
import { desktopMq } from '../../constants/breakpoints';

const height = '24px';

export default StyleSheet.create({
  hr: {
    position: 'relative',
    height,
    margin: '30px 15%',

    [desktopMq]: {
      margin: '50px 15%',
    },
  },

  line: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: `calc(50% - ${height})`,
    height: '1px',
    background: gray300,
  },

  lineLeft: {
    left: 0,
  },

  lineRight: {
    right: 0,
  },

  iconContainer: {
    position: 'absolute',
    zIndex: 2,
    height,
    width: height,
    left: 0,
    right: 0,
    margin: 'auto',
  },

  icon: {
    fill: gray500,
    transformOrigin: 'center center',
    transform: 'rotate(90deg)',
  },
});
