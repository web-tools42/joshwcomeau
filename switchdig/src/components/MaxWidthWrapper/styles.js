import { StyleSheet } from 'aphrodite/no-important';
import { desktopMq } from '../../constants/breakpoints';
import {
  screenPaddingDesktopPx,
  screenPaddingMobilePx,
} from '../../constants/sizes';

export default StyleSheet.create({
  maxWidthWrapper: {
    position: 'relative',
    paddingLeft: screenPaddingMobilePx,
    paddingRight: screenPaddingMobilePx,
    marginLeft: 'auto',
    marginRight: 'auto',

    [desktopMq]: {
      paddingLeft: screenPaddingDesktopPx,
      paddingRight: screenPaddingDesktopPx,
    },
  },
});
