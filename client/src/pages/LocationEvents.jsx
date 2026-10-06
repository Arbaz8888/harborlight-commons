import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import EventList from '../components/EventList'
import { getVenue, VenueDefs } from '../components/VenueArt'
import useNow from '../utilities/useNow'
import '../css/LocationEvents.css'

const LocationEvents = () => {
  const { slug } = useParams()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])
  const [status, setStatus] = useState('loading')
  const now = useNow()

  useEffect(() => {
    (async () => {
      try {
        const [locationData, eventsData] = await Promise.all([
          LocationsAPI.getLocationBySlug(slug),
          EventsAPI.getEventsByLocation(slug)
        ])
        setLocation(locationData)
        setEvents(eventsData)
        setStatus('ready')
      }
      catch (error) {
        setStatus(error.status === 404 ? 'missing' : 'error')
      }
    }) ()
  }, [slug])

  if (status === 'loading') {
    return <p className='status-message'>Finding the way there…</p>
  }

  if (status === 'error') {
    return <p className='status-message'>This location could not be loaded. Is the server running?</p>
  }

  if (status === 'missing') {
    return (
      <div className='page-heading'>
        <h2>That spot is not on the map</h2>
        <p><Link to='/'>Head back to the waterfront</Link> and pick another one.</p>
      </div>
    )
  }

  const { accent, Art } = getVenue(location.slug)

  return (
    <div className='location-events' style={{ '--accent': accent }}>
      <header className='location-hero'>
        <svg className='location-art' viewBox='-115 122 230 264' aria-hidden='true'>
          <defs>
            <linearGradient id='hero-sky' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0' stopColor='#0a1630' />
              <stop offset='0.55' stopColor='#272c62' />
              <stop offset='0.85' stopColor='#9c4f7d' />
              <stop offset='1' stopColor='#f09a5c' />
            </linearGradient>
          </defs>
          <VenueDefs />
          <rect x='-115' y='122' width='230' height='250' fill='url(#hero-sky)' />
          <Art />
          <rect x='-115' y='372' width='230' height='14' fill='#31465c' />
          <rect x='-115' y='372' width='230' height='3' fill='#4d6884' />
        </svg>

        <div className='location-info'>
          <Link to='/' className='back-link'>← Back to the map</Link>
          <h2>{location.name}</h2>
          <p className='location-tagline'>{location.tagline}</p>
          <p className='location-description'>{location.description}</p>
          <address>{location.address}, {location.city}, {location.state} {location.zip}</address>
        </div>
      </header>

      <EventList events={events} now={now} />
    </div>
  )
}

export default LocationEvents
