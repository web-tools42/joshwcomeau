import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Book from './Book';
import Eye from './Eye';
import Crocodile from './Crocodile';
import Arm from './Arm';
import Particle from '../Particle';
import FadeInAfter from '../FadeInAfter';

class BookAnimation extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <FadeInAfter delay={100} duration={0}>
          <Particle angle={-65} velocity={150} spin={90}>
            <Particle.Asterisk />
          </Particle>
        </FadeInAfter>
        <Particle angle={-135} velocity={140}>
          <Particle.Circle />
        </Particle>
        <Particle angle={-120} velocity={100}>
          <Particle.Circle type="fill" color="#FFD633" />
        </Particle>
        <Particle angle={-125} velocity={190} spin={-360}>
          <Particle.Diamond />
        </Particle>
        <Particle angle={-120} velocity={150} spin={-90}>
          <Particle.Star />
        </Particle>
        <Particle angle={-185} velocity={150}>
          <Particle.Circle type="fill" color="#FFD633" />
        </Particle>
        <Particle angle={-75} velocity={200} spin={360}>
          <Particle.X />
        </Particle>

        <div className={css(styles.bookWrapper)}>
          <Book width={150} />
        </div>

        <div className={css(styles.eyeWrapper)}>
          <FadeInAfter delay={500} duration={1500}>
            <Particle angle={-90} velocity={20}>
              <Eye size={55} />
            </Particle>
          </FadeInAfter>
        </div>

        <div className={css(styles.crocWrapper)}>
          <FadeInAfter delay={650} duration={500}>
            <Particle angle={-160} velocity={40}>
              <Crocodile size={84} />
            </Particle>
          </FadeInAfter>
        </div>

        <div className={css(styles.armWrapper)}>
          <FadeInAfter delay={900} duration={1000}>
            <Particle angle={-20} velocity={120}>
              <Arm size={144} />
            </Particle>
          </FadeInAfter>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: 500,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFF',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
  },
  bookWrapper: {
    position: 'relative',
    zIndex: 2,
    // transformStyle: 'preserve-3d',
  },
  eyeWrapper: {
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-10px, -125px)',
  },
  crocWrapper: {
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-100px, -50px)',
  },
  armWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-90px, -60px)',
    transformStyle: 'preserve-3d',
  },
});

export default BookAnimation;
