// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import type { FileStatus } from './WhimsicalInstaller.types';

type Props = {
  x: number,
  y: number,
  size?: number,
  status: FileStatus,
  id: string,
  queueLength: number,
  useTransform: boolean,
  handleMouseDown?: (id: string) => void,
};

class File extends PureComponent<Props> {
  static defaultProps = {
    queueLength: 8,
  };

  lastCoordinates: Array<{ x: number, y: number }> = [];

  componentDidUpdate(prevProps: Props) {
    const { queueLength } = this.props;

    this.lastCoordinates.push({ x: prevProps.x, y: prevProps.y });

    if (this.lastCoordinates.length > queueLength) {
      this.lastCoordinates.shift();
    }
  }

  getFileRotation = () => {
    // Get the orientation for the file.
    // This is done by comparing the current coordinates to the previous ones.
    if (this.lastCoordinates.length === 0) {
      return 0;
    }

    const { x, y } = this.props;

    const previousCoordinate = this.lastCoordinates[0];

    const deltaX = x - previousCoordinate.x;
    const deltaY = y - previousCoordinate.y;

    // angle in degrees
    const angleInRads = Math.atan2(deltaY, deltaX);
    const angleInDegrees = (angleInRads * 180) / Math.PI;

    // We want our file to be sticking up, not sideways, so we add 90 degrees.
    return angleInDegrees + 90;
  };

  render() {
    const {
      x,
      y,
      id,
      size,
      status,
      useTransform,
      handleMouseDown,
    } = this.props;

    const rotation = this.getFileRotation();

    return (
      <Wrapper
        x={x}
        y={y}
        size={size}
        status={status}
        rotation={rotation}
        useTransform={useTransform}
        onMouseDown={() =>
          typeof handleMouseDown === 'function' && handleMouseDown(id)
        }
      >
        <svg viewBox="0 0 20 28" height="100%">
          <defs>
            <filter id="file-corner" x="-100%" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceGraphic" dx="-1" dy="1" />
              <feColorMatrix
                result="matrixOut"
                in="offOut"
                type="matrix"
                values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
              />
              <feGaussianBlur
                result="blurOut"
                in="matrixOut"
                stdDeviation="1"
              />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <path
            d={`
                M0,0
                L15,0
                L20,5
                L20,28
                L0,28
              `}
            stroke="none"
            fill="#FFF"
          />
          <polygon
            points="15,0 15,5 20,5"
            stroke="none"
            fill="#FFF"
            filter="url(#file-corner)"
          />
        </svg>
      </Wrapper>
    );
  }
}

const isGrabbable = (status: FileStatus) =>
  status !== 'being-captured' && status !== 'captured';

const WIDTH_RATIO = 20 / 28;

const getXCoord = ({ x, size }) => x - (size * WIDTH_RATIO) / 2 + 'px';
const getYCoord = ({ y, size }) => y - size / 2 + 'px';

const Wrapper = styled.div.attrs({
  style: props => ({
    top: props.useTransform ? 0 : getYCoord(props),
    left: props.useTransform ? 0 : getXCoord(props),
    transform: `
      translate(
        ${props.useTransform ? getXCoord(props) : 0},
        ${props.useTransform ? getYCoord(props) : 0}
      )
      rotate(${props.rotation}deg)`,
  }),
})`
  position: absolute;

  z-index: 2;
  height: ${props => props.size}px;
  overflow: visible;
  will-change: transform;
  transform-origin: center center;
  cursor: ${props => (isGrabbable(props.status) ? 'grab' : 'default')};

  &:active {
    cursor: ${props => (isGrabbable(props.status) ? 'grabbing' : 'default')};
  }
`;

export default File;
