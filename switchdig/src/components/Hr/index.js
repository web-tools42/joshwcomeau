// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import Icon from '../Icon';
import styles from './styles';


const Hr = () => (
  <div className={css(styles.hr)}>
    <div className={css(styles.line, styles.lineLeft)} />
    <div className={css(styles.line, styles.lineRight)} />
    <div className={css(styles.iconContainer)}>
      <Icon value="tonality" className={css(styles.icon)} />
    </div>
  </div>
);

Hr.propTypes = {

};

Hr.defaultProps = {

};

export default Hr;
