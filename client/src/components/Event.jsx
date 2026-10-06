import React from 'react'
import { Link } from 'react-router-dom'
import { getVenue } from './VenueArt'
import {
  formatDate,
  formatTime,
  formatMonth,
  formatDay,
  hasPassed,
  getCountdown,
  formatElapsed
} from '../utilities/dates'
import '../css/Event.css'

const pad = (value) => String(value).padStart(2, '0')

const Event = ({ event, now, showLocation = false }) => {
  const passed = hasPassed(event.startsAt, now)
  const countdown = getCountdown(event.startsAt, now)
  const { accent } = getVenue(event.locationSlug)

  const units = [
    ['days', countdown.days],
    ['hrs', pad(countdown.hours)],
    ['min', pad(countdown.minutes)],
    ['sec', pad(countdown.seconds)]
  ]

  return (
    <article className={passed ? 'event-card event-passed' : 'event-card'} style={{ '--accent': accent }}>
      <div className='event-date'>
        <span className='event-month'>{formatMonth(event.startsAt)}</span>
        <span className='event-day'>{formatDay(event.startsAt)}</span>
      </div>

      <div className='event-body'>
        <div className='event-tags'>
          <span className='event-category'>{event.category}</span>
          <span className='event-price'>{event.price}</span>
        </div>
        <h3>{event.title}</h3>
        <p className='event-when'>{formatDate(event.startsAt)} at {formatTime(event.startsAt)}</p>
        {showLocation && (
          <p className='event-where'>
            <Link to={`/locations/${event.locationSlug}`}>{event.locationName}</Link>
          </p>
        )}
        <p className='event-description'>{event.description}</p>
        <p className='event-host'>Hosted by {event.host}</p>
      </div>

      {passed ? (
        <div className='event-countdown'>
          <span className='passed-badge'>Event has passed</span>
          <p className='passed-elapsed'>{formatElapsed(countdown)}</p>
        </div>
      ) : (
        <div className='event-countdown'>
          <p className='countdown-label'>Starts in</p>
          <div className='countdown-units'>
            {units.map(([name, value]) => (
              <div key={name} className='countdown-unit'>
                <span className='countdown-value'>{value}</span>
                <span className='countdown-name'>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default Event
