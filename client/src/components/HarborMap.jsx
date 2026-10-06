import React from 'react'
import { Link } from 'react-router-dom'
import { getVenue, VenueDefs } from './VenueArt'

const WIDTH = 1000
const HEIGHT = 510
const QUAY = 372

const stars = [
  [42, 48, 1.4], [118, 92, 1], [176, 30, 1.6], [248, 118, 1], [301, 56, 1.3],
  [372, 24, 1], [431, 96, 1.5], [498, 44, 1], [556, 132, 1.2], [612, 70, 1.6],
  [668, 28, 1], [724, 110, 1.3], [948, 40, 1.4], [912, 148, 1], [968, 104, 1.2],
  [86, 160, 1], [336, 168, 1.1], [472, 182, 1], [760, 176, 1.2], [640, 190, 1]
]

const waves = [
  [60, 408, 90], [240, 420, 70], [420, 404, 110], [640, 414, 80], [820, 406, 100],
  [130, 492, 120], [380, 498, 90], [600, 490, 130], [860, 496, 80]
]

const describeUpcoming = (count) => {
  if (count === 0) return 'Nothing upcoming'
  return `${count} upcoming event${count === 1 ? '' : 's'}`
}

const HarborMap = ({ locations }) => (
  <div className='harbor-map'>
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role='group' aria-label='Map of the Harborlight waterfront'>
      <defs>
        <linearGradient id='map-sky' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='#0a1630' />
          <stop offset='0.5' stopColor='#272c62' />
          <stop offset='0.82' stopColor='#9c4f7d' />
          <stop offset='1' stopColor='#f09a5c' />
        </linearGradient>
        <linearGradient id='map-sea' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='#24506b' />
          <stop offset='1' stopColor='#0a1c2e' />
        </linearGradient>
      </defs>
      <VenueDefs />

      <rect width={WIDTH} height={QUAY} fill='url(#map-sky)' />
      {stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill='#f4ecdf' opacity='0.8' />
      ))}
      <circle cx='838' cy='78' r='46' fill='#fdf3d7' opacity='0.1' />
      <circle cx='838' cy='78' r='26' fill='#fdf3d7' />
      <path d='M0 372 V326 Q90 296 180 322 T350 316 T530 330 T710 310 T870 326 T1000 306 V372 Z' fill='#1c2150' opacity='0.85' />

      <rect y={QUAY + 14} width={WIDTH} height={HEIGHT - QUAY - 14} fill='url(#map-sea)' />
      {waves.map(([x, y, length]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y} h${length}`} stroke='#f4ecdf' strokeWidth='2' strokeLinecap='round' opacity='0.1' />
      ))}
      <rect y={QUAY} width={WIDTH} height='16' fill='#31465c' />
      <rect y={QUAY} width={WIDTH} height='3' fill='#4d6884' />

      {locations.map((location, index) => {
        const { accent, Art } = getVenue(location.slug)
        const x = WIDTH * (index + 0.5) / locations.length
        const upcoming = describeUpcoming(location.upcomingCount)

        return (
          <Link
            key={location.id}
            to={`/locations/${location.slug}`}
            className='venue'
            style={{ '--accent': accent }}
            aria-label={`${location.name}, ${upcoming}`}
          >
            <g transform={`translate(${x} 0)`}>
              <rect x='-98' y='120' width='196' height='370' fill='transparent' />
              <g className='venue-art'>
                <Art />
              </g>
              <path className='venue-tether' d={`M0 ${QUAY + 18} V424`} />
              <rect className='venue-tag' x='-94' y='424' width='188' height='56' rx='14' />
              <text className='venue-name' x='0' y='448' textAnchor='middle'>{location.name}</text>
              <text className='venue-count' x='0' y='467' textAnchor='middle'>{upcoming}</text>
            </g>
          </Link>
        )
      })}
    </svg>
  </div>
)

export default HarborMap
