// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { css } from 'aphrodite/no-important';

import { widthMediumPx } from '../../constants/sizes';
import styles from './styles';


const MaxWidthWrapper = ({ children, maxWidth = widthMediumPx, className }) => (
  <div
    className={classNames(css(styles.maxWidthWrapper), className)}
    style={{ maxWidth }}
  >
    {children}
  </div>
);

MaxWidthWrapper.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  className: PropTypes.string,
};

MaxWidthWrapper.defaultProps = {

};

export default MaxWidthWrapper;
