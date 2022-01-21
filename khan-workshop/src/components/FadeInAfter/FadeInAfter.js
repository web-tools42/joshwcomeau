import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const fadeInKeyframes = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};

class FadeInAfter extends Component {
  state = {
    hasDelayPassed: false,
  };

  static defaultProps = {
    duration: 500,
  };

  componentDidMount() {
    this.timeoutId = window.setTimeout(() => {
      this.setState({ hasDelayPassed: true });
    }, this.props.delay);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  render() {
    const { children, duration } = this.props;
    const { hasDelayPassed } = this.state;

    if (!hasDelayPassed) {
      return null;
    }

    return (
      <div
        className={css(styles.wrapper)}
        style={{ animationDuration: `${duration}ms` }}
      >
        {children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    animationName: fadeInKeyframes,
  },
});

export default FadeInAfter;
