// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Motion, spring } from 'react-motion';

import { Asterisk, Circle, Diamond, Star, X } from './shapes';

type Props = {
  angle: number,
  velocity: number,
  spin: number,
  children: React.Node,
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

    const translateSpringSettings = {
      stiffness: props.velocity * 0.5,
      damping: 25,
    };
    const rotateSpringSettings = {
      stiffness: Math.abs(props.spin * 0.1),
      damping: 7,
    };

    return { deltaX, deltaY, translateSpringSettings, rotateSpringSettings };
  }

  render() {
    const { children, spin } = this.props;
    const {
      deltaX,
      deltaY,
      translateSpringSettings,
      rotateSpringSettings,
    } = this.state;

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
            className={css(styles.particle)}
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
Particle.Circle = Circle;
Particle.Diamond = Diamond;
Particle.Star = Star;
Particle.X = X;

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default Particle;
