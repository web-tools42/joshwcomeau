import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const FadeIn = ({ duration = 500, children }) => (
  <div
    className={css(styles.wrapper)}
    style={{
      animationDuration: duration,
    }}
  >
    {children}
  </div>
)

const fadeInKeyframes = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

const styles = StyleSheet.create({
  wrapper: {
    animationName: fadeInKeyframes,
    animationTimingFunction: 'ease-in',
  },
});

export default FadeIn;
