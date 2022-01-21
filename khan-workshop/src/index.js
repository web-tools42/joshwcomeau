import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import BookAnimation from './components/BookAnimation';

const App = () => (
  <div className={css(styles.wrapper)}>
    <BookAnimation />
  </div>
);

const styles = StyleSheet.create({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#EEE',
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
