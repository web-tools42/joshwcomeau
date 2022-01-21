// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import RadioButton from '../RadioButton';
import styles from './styles';


const RadioButtonGroup = ({ radioButtons, name, onChange, checkedId }) => (
  <div className={css(styles.radioButtonGroup)}>
    {radioButtons.map(({ id, label }) => (
      <RadioButton
        key={id}
        name={name}
        className={styles.radioButton}
        label={label}
        isChecked={checkedId === id}
        onChange={ev => onChange({
          id,
          value: ev.target.checked,
        })}
      />
    ))}
  </div>
);

RadioButtonGroup.propTypes = {
  radioButtons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedId: PropTypes.string,
};

RadioButtonGroup.defaultProps = {

};

export default RadioButtonGroup;
