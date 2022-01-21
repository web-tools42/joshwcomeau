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
        width: width * progress,
        height,
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
    transition: 'width 500ms',
  }
});

export default ProgressBar;
