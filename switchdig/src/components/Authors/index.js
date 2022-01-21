/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Hr from '../Hr';
import AuthorSubscribeForm from '../AuthorSubscribeForm';
import styles from './styles';


const Authors = () => (
  <div className={css(styles.authors)} >
    <MaxWidthWrapper>
      <h1 className={css(styles.heading)}>Never miss a great book again...</h1>
      <p className={css(styles.paragraph)}>
        I’m a voracious reader, and I have a&nbsp;
        <a href="/">lot</a>&nbsp;
        <a href="/">of</a>&nbsp;
        <a href="/">favorite</a>&nbsp;
        <a href="/">authors</a>.
      </p>
      <p className={css(styles.paragraph)}>
        On occasion, I’ll check to see if any of these authors have a new book out. This is a time-consuming and error-prone process, and I’ve no doubt missed dozens of great books over the years.
      </p>
      <p className={css(styles.paragraph)}>
        Switchdig is a service to ensure you never miss new releases from your favorite authors. It’s something I built for myself, and it’s proven so useful that I decided to put it online.
      </p>

      <Hr />
    </MaxWidthWrapper>

    <MaxWidthWrapper>
      <AuthorSubscribeForm />
    </MaxWidthWrapper>
  </div>
);

Authors.propTypes = {

};


export default Authors;
