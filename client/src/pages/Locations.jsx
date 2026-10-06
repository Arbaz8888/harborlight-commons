import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import HarborMap from '../components/HarborMap'
import '../css/Locations.css'

const Locations = () => {
  const [locations, setLocations] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    (async () => {
      try {
        const locationsData = await LocationsAPI.getAllLocations()
        setLocations(locationsData)
        setStatus('ready')
      }
      catch (error) {
        setStatus('error')
      }
    }) ()
  }, [])

  return (
    <div className='available-locations'>
      <div className='page-heading'>
        <h2>Where to tonight?</h2>
        <p>Pick a spot along the waterfront to see everything happening there.</p>
      </div>

      {status === 'loading' && <p className='status-message'>Lighting the lamps…</p>}
      {status === 'error' && <p className='status-message'>The map could not be loaded. Is the server running?</p>}
      {status === 'ready' && <HarborMap locations={locations} />}
    </div>
  )
}

export default Locations
