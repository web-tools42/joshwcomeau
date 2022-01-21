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

const styles = StyleSheet.create({
  wrapper: {
    background: '#EEE',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    background: Colors.teal,
    transition: `transform 500ms`,
    willChange: 'transform',
    transformOrigin: 'left',
  }
});

export default ProgressBar;
