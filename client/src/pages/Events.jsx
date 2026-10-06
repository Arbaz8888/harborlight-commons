import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import EventList from '../components/EventList'
import { getVenue } from '../components/VenueArt'
import useNow from '../utilities/useNow'
import '../css/Events.css'

const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [status, setStatus] = useState('loading')
  const [searchParams, setSearchParams] = useSearchParams()
  const now = useNow()

  const selected = searchParams.get('location') ?? ''

  useEffect(() => {
    (async () => {
      try {
        const [eventsData, locationsData] = await Promise.all([
          EventsAPI.getAllEvents(),
          LocationsAPI.getAllLocations()
        ])
        setEvents(eventsData)
        setLocations(locationsData)
        setStatus('ready')
      }
      catch (error) {
        setStatus('error')
      }
    }) ()
  }, [])

  const visibleEvents = selected
    ? events.filter((event) => event.locationSlug === selected)
    : events

  const selectLocation = (slug) => {
    setSearchParams(slug ? { location: slug } : {})
  }

  return (
    <div className='all-events'>
      <div className='page-heading'>
        <h2>Everything on the waterfront</h2>
        <p>Every event at every spot, soonest first. Filter down to one location if you already know where you are headed.</p>
      </div>

      {status === 'loading' && <p className='status-message'>Checking the calendar…</p>}
      {status === 'error' && <p className='status-message'>The events could not be loaded. Is the server running?</p>}

      {status === 'ready' && (
        <>
          <div className='event-filter' role='group' aria-label='Filter events by location'>
            <button
              type='button'
              className='filter-chip'
              aria-pressed={selected === ''}
              onClick={() => selectLocation('')}
            >
              All locations
            </button>
            {locations.map((location) => (
              <button
                key={location.id}
                type='button'
                className='filter-chip'
                style={{ '--accent': getVenue(location.slug).accent }}
                aria-pressed={selected === location.slug}
                onClick={() => selectLocation(location.slug)}
              >
                {location.name}
              </button>
            ))}
          </div>

          <p className='event-total'>
            Showing {visibleEvents.length} event{visibleEvents.length === 1 ? '' : 's'}
          </p>

          <EventList events={visibleEvents} now={now} showLocation />
        </>
      )}
    </div>
  )
}

export default Events
