// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import { getPrimaryColorForMediaType } from '../../helpers/style';

import Icon from '../Icon';
import styles from './styles';


const Header = ({ mediaType }) => {
  const primaryColor = getPrimaryColorForMediaType(mediaType);

  return (
    <header className={css(styles.header)}>
      <div
        className={css(styles.topLine)}
        style={{ backgroundColor: primaryColor }}
      />

      <h1 className={css(styles.logo)}>
        <Icon className={css(styles.icon)} value="notifications-active" size={22} />
        <span className={css(styles.name)}>Switchdig</span>
      </h1>
    </header>
  );
};

Header.propTypes = {
  mediaType: PropTypes.oneOf(['authors']),
};

Header.defaultProps = {

};

export default Header;
