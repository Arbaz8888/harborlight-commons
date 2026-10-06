const TIME_ZONE = 'America/Los_Angeles'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: TIME_ZONE
})

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
  timeZone: TIME_ZONE
})

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: TIME_ZONE
})

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  timeZone: TIME_ZONE
})

export const formatDate = (value) => dateFormatter.format(new Date(value))

export const formatTime = (value) => timeFormatter.format(new Date(value))

export const formatMonth = (value) => monthFormatter.format(new Date(value))

export const formatDay = (value) => dayFormatter.format(new Date(value))

export const hasPassed = (value, now) => new Date(value).getTime() <= now

export const getCountdown = (value, now) => {
  const distance = Math.abs(new Date(value).getTime() - now)

  return {
    days: Math.floor(distance / DAY),
    hours: Math.floor((distance % DAY) / HOUR),
    minutes: Math.floor((distance % HOUR) / MINUTE),
    seconds: Math.floor((distance % MINUTE) / SECOND)
  }
}

const pluralize = (count, unit) => `${count} ${unit}${count === 1 ? '' : 's'}`

export const formatElapsed = ({ days, hours, minutes }) => {
  if (days > 0) return `${pluralize(days, 'day')} ago`
  if (hours > 0) return `${pluralize(hours, 'hour')} ago`
  if (minutes > 0) return `${pluralize(minutes, 'minute')} ago`
  return 'moments ago'
}
