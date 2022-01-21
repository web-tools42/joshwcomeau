// @flow
import * as React from 'react';
import { Motion, spring } from 'react-motion';

import { Asterisk } from './shapes';

type Props = {
  angle: number,
  velocity: number,
  spin: number,
  children: React.Node,
};

const translateSpringSettings = {
  stiffness: 50,
  damping: 25,
};
const rotateSpringSettings = {
  stiffness: 50,
  damping: 35,
};

class Particle extends React.PureComponent<Props> {
  state = {};

  static defaultProps = {
    spin: 0,
  };

  static getDerivedStateFromProps(props: Props) {
    const angleInRads = (props.angle * Math.PI) / 180;

    const deltaY = Math.sin(angleInRads) * props.velocity;
    const deltaX = Math.cos(angleInRads) * props.velocity;

    return { deltaX, deltaY };
  }

  render() {
    const { children, spin } = this.props;
    const { deltaX, deltaY } = this.state;

    return (
      <Motion
        defaultStyle={{ x: 0, y: 0, spin: 0 }}
        style={{
          x: spring(deltaX, translateSpringSettings),
          y: spring(deltaY, translateSpringSettings),
          spin: spring(spin, rotateSpringSettings),
        }}
      >
        {interpolated => (
          <div
            style={{
              transform: `
                translate(
                  ${interpolated.x}px,
                  ${interpolated.y}px
                )
                rotate(${interpolated.spin}deg)
              `,
            }}
          >
            {children}
          </div>
        )}
      </Motion>
    );
  }
}

Particle.Asterisk = Asterisk;

export default Particle;
