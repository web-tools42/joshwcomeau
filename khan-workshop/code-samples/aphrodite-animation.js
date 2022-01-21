const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

const styles = StyleSheet.create({
  wrapper: {
    animationName: fadeIn,
    animationDuration: '1000ms',
    animationTimingFunction: 'ease-in',
  },
});
