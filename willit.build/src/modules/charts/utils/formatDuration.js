export function breakDurationIntoUnits(durationInSeconds) {
  const seconds = durationInSeconds % 60

  const totalMinutes = (durationInSeconds - seconds) / 60

  let minutes = totalMinutes
  let hours = 0

  if (totalMinutes >= 60) {
    minutes = totalMinutes % 60
    hours = (totalMinutes - minutes) / 60
  }

  return {
    hours,
    minutes,
    seconds,
  }
}

function formatDuration(durationInSeconds) {
  const { hours, minutes, seconds } = breakDurationIntoUnits(durationInSeconds)

  const secondsStr = seconds ? `${seconds}s` : `0s`
  const minutesStr = minutes ? `${minutes}m ` : hours ? `0m ` : ``
  const hoursStr = hours ? `${hours}h ` : ``

  return `${hoursStr}${minutesStr}${secondsStr}`
}

export default formatDuration
