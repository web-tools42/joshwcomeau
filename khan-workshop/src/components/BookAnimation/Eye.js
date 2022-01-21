import * as React from 'react';
import { Motion, spring } from 'react-motion';

import CursorPosition from '../CursorPosition';

const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));
const getDistanceBetweenPoints = (p1, p2) => {
  const deltaX = Math.abs(p2.x - p1.x);
  const deltaY = Math.abs(p2.y - p1.y);

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
};

class Eye extends React.PureComponent {
  getEyeDisplacement = ({ x, y }) => {
    const { size } = this.props;

    if (!this.node) {
      return {
        x: 0,
        y: 0,
      };
    }

    const areaOfEffectRadius = size * 2;
    const maxDisplacement = size * 0.14;
    const reachMaxAt = areaOfEffectRadius / 2;

    const bb = this.node.getBoundingClientRect();

    const center = {
      x: bb.left + bb.width / 2,
      y: bb.top + bb.height / 2,
    };

    const distance = getDistanceBetweenPoints(center, { x, y });

    if (distance > areaOfEffectRadius) {
      return {
        x: 0,
        y: 0,
      };
    }

    const deltaX = x - center.x;
    const deltaY = y - center.y;

    const unboundTranslateX = (deltaX / reachMaxAt) * maxDisplacement;
    const unboundTranslateY = (deltaY / reachMaxAt) * maxDisplacement;

    return {
      x: clamp(unboundTranslateX, -maxDisplacement, maxDisplacement),
      y: clamp(unboundTranslateY, -maxDisplacement, maxDisplacement),
    };
  };

  render() {
    const { size } = this.props;

    return (
      <CursorPosition>
        {coords => {
          const { x, y } = this.getEyeDisplacement(coords);

          return (
            <svg
              ref={node => (this.node = node)}
              width={size}
              height={size}
              viewBox="0 0 55 55"
              fill="none"
              style={{ display: 'block' }}
            >
              <path
                d="M27.33 54.66C42.4239 54.66 54.66 42.4239 54.66 27.33C54.66 12.2361 42.4239 0 27.33 0C12.2361 0 0 12.2361 0 27.33C0 42.4239 12.2361 54.66 27.33 54.66Z"
                fill="#37C5FD"
              />
              <Motion style={{ x: spring(x), y: spring(y) }}>
                {interpolated => (
                  <g clipPath="url(#eye-clip)">
                    <path
                      d="M48.48 27.33C48.48 27.33 39.01 41.13 27.32 41.13C15.63 41.13 6.17 27.33 6.17 27.33C6.17 27.33 15.64 13.53 27.33 13.53C39.02 13.53 48.48 27.33 48.48 27.33Z"
                      fill="white"
                    />
                    <path
                      d="M27.33 38.43C33.4604 38.43 38.43 33.4604 38.43 27.33C38.43 21.1996 33.4604 16.23 27.33 16.23C21.1996 16.23 16.23 21.1996 16.23 27.33C16.23 33.4604 21.1996 38.43 27.33 38.43Z"
                      fill="#14BF96"
                      transform={`translate(${interpolated.x *
                        0.6}, ${interpolated.y * 0.6})`}
                    />
                    <path
                      d="M27.33 33.54C30.7597 33.54 33.54 30.7597 33.54 27.33C33.54 23.9003 30.7597 21.12 27.33 21.12C23.9003 21.12 21.12 23.9003 21.12 27.33C21.12 30.7597 23.9003 33.54 27.33 33.54Z"
                      fill="#05353D"
                      transform={`translate(${interpolated.x}, ${
                        interpolated.y
                      })`}
                    />
                  </g>
                )}
              </Motion>
              <defs>
                <clipPath id="eye-clip">
                  <path
                    d="M48.48 27.33C48.48 27.33 39.01 41.13 27.32 41.13C15.63 41.13 6.17 27.33 6.17 27.33C6.17 27.33 15.64 13.53 27.33 13.53C39.02 13.53 48.48 27.33 48.48 27.33Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          );
        }}
      </CursorPosition>
    );
  }
}
export default Eye;
