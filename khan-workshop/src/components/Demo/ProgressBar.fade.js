import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Colors from '@khanacademy/wonder-blocks-color';

class ProgressBar extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
      this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;
    const {width, height, value} = this.props;

    return (
      <div
        className={css(styles.wrapper)}
        style={{
          width,
          height,
          opacity: isVisible ? 1 : 0,
          transition: isVisible ? 'opacity 500ms' : 'opacity 1ms',
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
