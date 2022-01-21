// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';


const NotFound = () => (
  <div className={css(styles.notFound)}>
  404 Not Found
  </div>
);

NotFound.propTypes = {

};

NotFound.defaultProps = {

};

export default NotFound;
