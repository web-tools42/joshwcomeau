import React, { Component } from 'react';
import Button from '@khanacademy/wonder-blocks-button';

class Triggerable extends Component {
  state = {
    isShown: true,
  };

  retrigger = () => {
    this.setState({ isShown: false }, () => {
      this.setState({ isShown: true });
    });
  };

  render() {
    const { children, otherActions } = this.props;
    const { isShown } = this.state;

    return (
      <div>
        {isShown && children}
        <br />
        <div style={{ display: 'flex', justifyContent: otherActions ? 'space-between' : 'center'}}>
          <Button onClick={this.retrigger}>Restart Animation</Button>
          {otherActions}
        </div>
      </div>
    );
  }
}

export default Triggerable;
