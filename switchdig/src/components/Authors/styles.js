import { StyleSheet } from 'aphrodite/no-important';

import { desktopMq } from '../../constants/breakpoints';

export default StyleSheet.create({
  authors: {
    paddingTop: '30px',
    paddingBottom: '30px',

    [desktopMq]: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
  },

  textField: {
    transform: 'translateY(-14px)',
  },
});
