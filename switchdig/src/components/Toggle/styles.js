import { StyleSheet } from 'aphrodite/no-important';

import { desktopMq } from '../../constants/breakpoints';


export default StyleSheet.create({
  toggleWrapper: {
    position: 'relative',
    lineHeight: '21px',
    margin: '4px 0',

    [desktopMq]: {
      display: 'inline-block',
      marginRight: '45px',
    },
  },

  nativeInput: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
  },

  label: {
    marginLeft: '6px',
    verticalAlign: 'top',
    fontSize: '14px',
  },
});
