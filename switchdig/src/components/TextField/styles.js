import { StyleSheet } from 'aphrodite/no-important';

import { desktopMq } from '../../constants/breakpoints';
import { red, gray500, gray800, gray900 } from '../../constants/colors';


const borderBottomHorizontalAnimation = {
  '0%': {
    transform: 'scaleX(0)',
  },

  '100%': {
    transform: 'scaleX(1)',
  },
};

const MOBILE_INPUT_WIDTH = 190;
const DESKTOP_INPUT_WIDTH = 300;


export default StyleSheet.create({
  textField: {
    position: 'relative',
    color: gray900,
  },
  textFieldError: {
    color: red,
  },
  textFieldInputWrapper: {
    position: 'relative',
    width: MOBILE_INPUT_WIDTH,

    [desktopMq]: {
      width: DESKTOP_INPUT_WIDTH,
    },
  },
  input: {
    background: 'transparent',
    border: 'none',
    padding: '12px 0',
    marginTop: '10px',
    outline: 'none',
    fontSize: '14px',
    color: gray800,
    width: MOBILE_INPUT_WIDTH,

    [desktopMq]: {
      width: DESKTOP_INPUT_WIDTH,
    },

  },
  bottomBorder: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '1px',
    backgroundColor: gray500,
  },
  bottomBorderHighlight: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: 0,
    height: '2px',
    backgroundColor: gray900,
    transform: 'scaleX(0)',
  },
  bottomBorderHighlightActive: {
    animationName: borderBottomHorizontalAnimation,
    animationDuration: '500ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(.24,.75,.5,1.08)',
    transformOrigin: 'left bottom',
  },
  bottomBorderHighlightError: {
    backgroundColor: red,
  },

  errorMessage: {
    color: red,
    paddingTop: '12px',
    fontSize: '12px',
    fontWeight: 100,
  },
});
