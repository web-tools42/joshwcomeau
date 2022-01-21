import React, { Component } from 'react';

class CursorPosition extends Component {
  state = {
    x: null,
    y: null,
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.updateMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.updateMousePosition);
  }

  updateMousePosition = ev => {
    this.setState({ x: ev.clientX, y: ev.clientY });
  };

  render() {
    return this.props.children(this.state);
  }
}

export default CursorPosition;
