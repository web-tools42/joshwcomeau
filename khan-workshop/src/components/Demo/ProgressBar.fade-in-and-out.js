import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Colors from '@khanacademy/wonder-blocks-color';

class ProgressBar extends Component {

  render() {
    const {width, height, value, isVisible} = this.props;

    return (
      <div
        className={css(styles.wrapper)}
        style={{
          width,
          height,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 500ms'
        }}
      >
        <div
          className={css(styles.bar)}
          style={{
            width,
            height,
            transform: `scaleX(${value})`,
          }}
        />
      </div>

    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    background: '#EEE',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    background: Colors.teal,
    transition: `transform 500ms`,
    transformOrigin: 'left',
    willChange: 'transform',
  }
});

export default ProgressBar;
