// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';


const SampleBook = ({ title, author, image }) => (
  <div className={css(styles.bookContainer)}>
    <img
      alt={`${title}, by ${author}`}
      className={css(styles.book)}
      src={image}
    />
  </div>
);

SampleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SampleBook;
