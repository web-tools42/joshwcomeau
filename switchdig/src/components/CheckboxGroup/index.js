// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import Checkbox from '../Checkbox';
import styles from './styles';


const CheckboxGroup = ({ checkboxes, onChange, checkedById }) => (
  <div className={css(styles.checkboxGroup)}>
    {checkboxes.map(({ id, label }) => (
      <Checkbox
        key={id}
        className={styles.checkbox}
        label={label}
        isChecked={checkedById[id]}
        onChange={ev => onChange({
          id,
          value: ev.target.checked,
        })}
      />
    ))}
  </div>
);

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  checkedById: PropTypes.object.isRequired,
};

CheckboxGroup.defaultProps = {

};

export default CheckboxGroup;
