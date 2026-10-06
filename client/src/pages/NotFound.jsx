import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className='page-heading'>
    <h2>Lost at sea</h2>
    <p>There is nothing at this address. <Link to='/'>Head back to the waterfront</Link>.</p>
  </div>
)

export default NotFound
