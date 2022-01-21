import * as React from 'react';
import {css, StyleSheet} from 'aphrodite';

const StudentName = ({ children }) => (
  <div className={css(styles.wrapper)}>
    {children}
  </div>
)

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    margin: 4,
    background: '#FFF',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
})

export default StudentName
