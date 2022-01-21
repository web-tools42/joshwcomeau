// @flow
import React, { Fragment, PureComponent } from 'react';
import { Motion, spring } from 'react-motion';

import {
  DEFAULT_WAVEFORM_NUM_OF_CYCLES,
  DEFAULT_WAVEFORM_AMPLITUDE,
  SPRING_SETTINGS,
} from '../../constants';

type DynamicValues = {
  amplitude: number,
  frequency: number,
  convergence: number,
  phase: number,
  progress: number,
};

type Props = {
  isPlaying: boolean,
  amplitude: number,
  // How many times does the waveform repeat within the viewable area of this
  // player? Defaults to 1, which shows a single "period" of the waveform.
  frequency: number,
  convergence: number,
  phase: number,

  children: (values: DynamicValues) => React$Node,
};

type State = {
  // `progress` is the number of cycles that have advanced since starting.
  // It can be decimal: eg. a progress of 1.5 means that the waveform has
  // advanced by 1 and a half iterations.
  progress: number,
  lastTickAt: ?Date,
  // When we receive the request to stop the animation, it's nice to follow
  // through to the end of the current cycle, so that it winds up in its
  // original position.
  // This number controls the cycle the stop was requested in.
  stopRequestedAtCycle: ?number,
};

class WaveformPlayer extends PureComponent<Props, State> {
  animationFrameId: number;

  state = {
    progress: 0,
    lastTickAt: null,
    stopRequestedAtCycle: null,
  };

  static defaultProps = {
    isPlaying: false,
    frequency: DEFAULT_WAVEFORM_NUM_OF_CYCLES,
    amplitude: DEFAULT_WAVEFORM_AMPLITUDE,
  };

  componentDidMount() {
    if (this.props.isPlaying) {
      this.start();
    }

    if (typeof document.addEventListener === 'function') {
      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange
      );
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const isJustStarting = !this.props.isPlaying && nextProps.isPlaying;
    const isJustStopping = this.props.isPlaying && !nextProps.isPlaying;

    if (isJustStarting) {
      this.start();
    } else if (isJustStopping) {
      this.stop();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameId);
  }

  handleVisibilityChange = () => {
    // When the user switches tabs or applications, the animation will
    // automatically pause (due to `requestAnimationFrame` implementation).
    // Our animation uses a timestamp, though, and so when it resumes, it
    // frantically does a bunch of work until it's caught up.
    // By detecting visibility changes, we can update that timestamp when the
    // user returns to the tab. This way, the animation restarts smoothly.
    const userReturnedToPage = !document.hidden;

    if (userReturnedToPage) {
      this.setState({ lastTickAt: new Date() });
    }
  };

  start = () => {
    this.setState({ lastTickAt: new Date() }, this.tick);
  };

  stop = () => {
    this.setState({
      stopRequestedAtCycle: this.state.progress,
    });
  };

  tick = () => {
    this.animationFrameId = window.requestAnimationFrame(() => {
      const { frequency } = this.props;
      const { progress, stopRequestedAtCycle, lastTickAt } = this.state;

      if (!lastTickAt) {
        return;
      }

      const tickAt = new Date();

      let secondsSinceLastTick = (tickAt - lastTickAt) / 1000;
      // Let's clamp the `secondsSinceLastTick` to 0.5 max. This is to avoid the
      // wild flurry that happens when returning to an inactive tab.
      secondsSinceLastTick = Math.min(secondsSinceLastTick, 0.5);

      const periodsSinceLastTick = secondsSinceLastTick * frequency;

      // At first glance, you might think we're just translating a fixed SVG
      // by `n` pixels to the left on every tick.
      // Actually, though, we're redrawing the wave on every tick.
      // This winds up being simpler, since it's an endless animation; this way
      // we don't have to worry about running out of wave, and every tick is
      // exactly the same.
      //
      // So, since we're not actually "moving" anything, all we need to know is
      // how many cycles have passed. If the number is 0.2, we're 20% through
      // the wave, and can start drawing from there.
      // By changing that value, we get the illusion of it moving.
      // on every frame.

      const nextProgressVal = progress + periodsSinceLastTick;

      // If this is the tick that pushes us into the next cycle, and we've
      // requested a stop, let's end this animation.
      if (typeof stopRequestedAtCycle === 'number') {
        const nextCyclesInteger = Math.floor(nextProgressVal);

        if (nextCyclesInteger > progress) {
          this.setState({
            progress: Math.floor(nextProgressVal),
            lastTickAt: tickAt,
            stopRequestedAtCycle: null,
          });
          return;
        }
      }

      this.setState(
        { progress: nextProgressVal, lastTickAt: tickAt },
        this.tick
      );
    });
  };

  renderValues = (values: DynamicValues) => {
    const { children } = this.props;

    // To appease React Motion, we have to return a React element, so we use
    // the DOM-free Fragment. This is really just a bit of a hack; I shouldn't
    // really be using React Motion for this at all, I should just manage my own
    // spring values!
    return <Fragment>{children(values)}</Fragment>;
  };

  render() {
    const { amplitude, frequency, convergence, phase } = this.props;
    const { progress } = this.state;

    return (
      <Motion
        defaultStyle={{
          progress: 0,
          amplitude,
          frequency,
          convergence: 0,
          phase: 0,
        }}
        style={{
          amplitude: spring(amplitude, SPRING_SETTINGS),
          frequency: spring(frequency, SPRING_SETTINGS),
          progress: spring(progress, SPRING_SETTINGS),
          convergence: spring(convergence, SPRING_SETTINGS),
          phase: spring(phase, SPRING_SETTINGS),
        }}
      >
        {this.renderValues}
      </Motion>
    );
  }
}

export default WaveformPlayer;
