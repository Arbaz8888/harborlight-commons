import React from 'react'
import Event from './Event'
import { hasPassed } from '../utilities/dates'

const EventList = ({ events, now, showLocation = false }) => {
  const upcoming = events.filter((event) => !hasPassed(event.startsAt, now))
  const past = events.filter((event) => hasPassed(event.startsAt, now)).reverse()

  return (
    <div className='event-list'>
      <section>
        <h3 className='event-list-heading'>Coming up <span>{upcoming.length}</span></h3>
        {upcoming.length > 0 ? (
          upcoming.map((event) => (
            <Event key={event.id} event={event} now={now} showLocation={showLocation} />
          ))
        ) : (
          <p className='status-message'>Nothing on the calendar here yet. Check back soon.</p>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h3 className='event-list-heading'>Already happened <span>{past.length}</span></h3>
          {past.map((event) => (
            <Event key={event.id} event={event} now={now} showLocation={showLocation} />
          ))}
        </section>
      )}
    </div>
  )
}

export default EventList
