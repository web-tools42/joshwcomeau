// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import * as STATUSES from '../../constants/statuses';
import styles from './styles';


// TODO: Statuses.
// Loading -> show a spinner
// Error -> Red underline, little X icon, error message below
// Success -> green underline, little checkmark

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  render() {
    const {
      id,
      status,
      label,
      placeholder,
      onChange,
      className,
      errorMessage,
    } = this.props;

    const hasError = status === STATUSES.FAILED;

    const error = hasError && errorMessage && (
      <div className={css(styles.errorMessage)}>{errorMessage}</div>
    );

    return (
      <label htmlFor={id} className={css(styles.textField, className)}>
        {label}
        <br />
        <div className={css(styles.textFieldInputWrapper)}>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={css(styles.input)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={onChange}
          />
          <div className={css(styles.bottomBorder)} />
          <div
            className={css(
              styles.bottomBorderHighlight,
              this.state.focused && styles.bottomBorderHighlightActive,
              hasError && styles.bottomBorderHighlightError
            )}
          />
        </div>

        {error}
      </label>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  status: PropTypes.oneOf(STATUSES),
  // eslint-disable-next-line react/forbid-prop-types
  className: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default TextField;
