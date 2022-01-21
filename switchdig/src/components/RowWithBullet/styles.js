import { StyleSheet } from 'aphrodite/no-important';

const BULLET_RADIUS = 25;

export default StyleSheet.create({
  rowWithBullet: {
    position: 'relative',
    display: 'flex',
    paddingBottom: '40px',
    opacity: 1,
    transition: 'opacity 500ms',
  },

  upcoming: {
    opacity: 0.5,
  },

  bullet: {
    position: 'relative',
    zIndex: 2,
    fontFamily: '"Montserrat", sans-serif',
    borderWidth: '3px',
    borderStyle: 'solid',
    width: BULLET_RADIUS * 2,
    height: BULLET_RADIUS * 2,
    marginRight: '22px',
    lineHeight: '46px',
    textAlign: 'center',
    borderRadius: '100%',
  },

  rowContent: {
    paddingTop: '16px',
    flex: 1,
  },

  connectingLine: {
    position: 'absolute',
    top: BULLET_RADIUS * 2,
    left: BULLET_RADIUS,
    bottom: 0,
    width: '1px',
  },
});
