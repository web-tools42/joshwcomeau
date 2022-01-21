export const getTextGradientStyle = (
  theme,
  leftColor,
  rightColor,
  angle = `45deg`
) => ({
  fontFamily: theme.fonts.body,
  background: `linear-gradient(${angle}, ${leftColor}, ${rightColor})`,
  WebkitBackgroundClip: `text`,
  WebkitTextFillColor: `transparent`,
})
