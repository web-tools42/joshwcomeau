// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import { blue, gray700, gray500 } from '../../constants/colors';
import styles from './styles';


const RowWithBullet = ({
  bulletNum,
  currentStepNum,
  bulletActiveColor,
  bulletUpcomingColor,
  shouldDrawConnectingLine,
  connectingLineActiveColor,
  connectingLineUpcomingColor,
  children,
}) => {
  const isActive = bulletNum === currentStepNum;
  const isCompleted = bulletNum < currentStepNum;
  const isUpcoming = !isActive && !isCompleted;

  const connectingLine = shouldDrawConnectingLine && (
    <div
      className={css(styles.connectingLine)}
      style={{
        background: isActive
          ? `linear-gradient(to bottom, ${connectingLineActiveColor} 0%, ${connectingLineUpcomingColor} 100%)`
          : connectingLineUpcomingColor,
      }}
    />
  );

  return (
    <div
      className={css(
        styles.rowWithBullet,
        isCompleted && styles.completed,
        isActive && styles.active,
        isUpcoming && styles.upcoming
      )}
    >
      <div
        className={css(styles.bullet)}
        style={{
          color: isActive ? bulletActiveColor : bulletUpcomingColor,
          borderColor: isActive ? bulletActiveColor : bulletUpcomingColor,
        }}
      >
        {bulletNum}
      </div>
      <div className={css(styles.rowContent)}>
        {children}
      </div>
      {connectingLine}
    </div>
  );
};

RowWithBullet.propTypes = {
  bulletNum: PropTypes.number.isRequired,
  currentStepNum: PropTypes.number.isRequired,
  bulletActiveColor: PropTypes.string.isRequired,
  bulletUpcomingColor: PropTypes.string.isRequired,
  shouldDrawConnectingLine: PropTypes.bool.isRequired,
  connectingLineActiveColor: PropTypes.string.isRequired,
  connectingLineUpcomingColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

RowWithBullet.defaultProps = {
  bulletActiveColor: blue,
  bulletUpcomingColor: gray700,
  shouldDrawConnectingLine: true,
  connectingLineActiveColor: blue,
  connectingLineUpcomingColor: gray500,
};

export default RowWithBullet;
