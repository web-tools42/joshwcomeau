import { StyleSheet } from 'aphrodite/no-important';

import { blue, gray900 } from '../../constants/colors';


export default StyleSheet.create({
  activeField: {
    color: blue,
    fontWeight: 'bold',
  },
  inactiveField: {
    color: gray900,
    fontWeight: 'bold',
  },
});
