import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Motion, spring} from 'react-motion';
import Colors from '@khanacademy/wonder-blocks-color';

const ProgressBar = ({
  width,
  height,
  progress,
  stiffness,
  damping,
}) => (
  <div
    className={css(styles.wrapper)}
    style={{width, height}}
  >
    <Motion style={{ progress: spring(progress, {stiffness, damping, precision: 0.001}) }}>
      {interpolated => (
        <div
          className={css(styles.bar)}
          style={{
            width,
            height,
            transform: `scaleX(${interpolated.progress})`,
          }}
        />
      )}
    </Motion>
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
    transformOrigin: 'left center',
    willChange: 'transform',
  }
});

export default ProgressBar;
