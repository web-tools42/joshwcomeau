import { StyleSheet } from 'aphrodite/no-important';
import * as colors from '../../constants/colors';
import { desktopMq } from '../../constants/breakpoints';
import {
  headerHeightPx,
  screenPaddingDesktop,
  screenPaddingMobile,
} from '../../constants/sizes';

export default StyleSheet.create({
  header: {
    height: headerHeightPx,
    lineHeight: headerHeightPx,
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'montserrat',
  },

  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
  },

  logo: {
    paddingLeft: `${screenPaddingMobile - 3}px`,
    fontSize: '20px',

    [desktopMq]: {
      paddingLeft: `${screenPaddingDesktop - 3}px`,
    },
  },

  icon: {
    transform: 'translateY(4px)', // vertical alignment D:
    fill: colors.gray500,
  },

  name: {
    verticalAlign: 'middle',
    marginLeft: '5px',
  },
});
