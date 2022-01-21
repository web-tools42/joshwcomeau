// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';
import Icon from '../Icon';

// NOTE: This is the base class used by Checkbox and RadioButton.
// It doesn't have much of a point outside those.

const Toggle = ({ type, name, className, label, isChecked, onChange }) => (
  <div className={css(styles.toggleWrapper, className)}>
    <input
      type={type}
      name={name}
      className={css(styles.nativeInput)}
      onChange={onChange}
      defaultChecked={isChecked}
    />
    <Icon
      size={20}
      value={isChecked ? `${type}-checked` : `${type}-unchecked`}
      className={css(styles.checkbox)}
    />
    <span className={css(styles.label)}>{label}</span>
  </div>
);

Toggle.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  name: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  isChecked: false,
};

export default Toggle;
