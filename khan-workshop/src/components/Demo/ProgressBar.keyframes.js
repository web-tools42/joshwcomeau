import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Colors from '@khanacademy/wonder-blocks-color';

const ProgressBar = ({
  width,
  height,
  progress,
}) => (
  <div
    className={css(styles.wrapper)}
    style={{width, height}}
  >
    <div
      className={css(styles.bar)}
      style={{
        width,
        height,
        transform: `scaleX(${progress})`,
      }}
    />
  </div>
);

const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

const styles = StyleSheet.create({
  wrapper: {
    background: '#EEE',
    borderRadius: 20,
    overflow: 'hidden',
    animationName: fadeIn,
    animationDuration: '1000ms',
    animationTimingFunction: 'ease-in',
  },

  bar: {
    background: Colors.teal,
    transition: `transform 500ms`,
    transformOrigin: 'left',
    willChange: 'transform',
  }
});

export default ProgressBar;
