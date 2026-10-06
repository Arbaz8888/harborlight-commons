import React from 'react'
import { useRoutes, Link, NavLink } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/locations/:slug',
      element: <LocationEvents />
    },
    {
      path: '/events',
      element: <Events />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <Link to='/' className='brand'>
          <h1>Harborlight Commons</h1>
          <p>Find something to do on the waterfront</p>
        </Link>

        <nav className='header-buttons'>
          <NavLink to='/' end>Map</NavLink>
          <NavLink to='/events'>All events</NavLink>
        </nav>
      </header>

      <main>
        {element}
      </main>

      <footer className='main-footer'>
        <p>Harborlight is an imagined town. The neighbors are real in spirit.</p>
      </footer>
    </div>
  )
}

export default App
