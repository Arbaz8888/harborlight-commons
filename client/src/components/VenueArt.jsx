import React from 'react'

const CREAM = '#f4ecdf'
const LAMP = '#ffd98a'
const WOOD = '#8b6a48'

const LighthouseArt = () => (
  <g>
    <polygon points='10,166 112,126 112,200' fill='url(#beam-right)' pointerEvents='none' />
    <polygon points='-10,166 -112,140 -112,190' fill='url(#beam-left)' pointerEvents='none' />
    <path d='M-104 372 Q-70 338 -20 336 Q40 332 104 372 Z' fill='#22384d' />
    <path d='M-22 338 L-13 186 L13 186 L22 338 Z' fill={CREAM} />
    <polygon points='-14.7,215 14.7,215 16.5,245 -16.5,245' fill='#d9573f' />
    <polygon points='-18.3,275 18.3,275 20,305 -20,305' fill='#d9573f' />
    <rect x='-5' y='320' width='10' height='18' rx='5' fill='#22384d' />
    <circle cx='0' cy='167' r='24' fill={LAMP} opacity='0.22' />
    <rect x='-10' y='154' width='20' height='26' fill={LAMP} />
    <path d='M-3.5 154 V180 M3.5 154 V180' stroke='#c98d2b' strokeWidth='1' />
    <rect x='-18' y='180' width='36' height='6' rx='1' fill='#22384d' />
    <polygon points='-14,154 14,154 0,136' fill='#d9573f' />
    <circle cx='0' cy='134' r='2.5' fill={CREAM} />
    <rect x='30' y='356' width='68' height='16' fill='#22384d' />
    <path d='M34 352 A30 30 0 0 1 94 352 Z' fill='#34597a' />
    <path d='M42 352 A22 22 0 0 1 86 352 Z' fill='#162c44' />
    <rect x='28' y='352' width='72' height='5' rx='2' fill={CREAM} />
    <circle cx='64' cy='326' r='2' fill={LAMP} />
    <circle cx='46' cy='334' r='2' fill={LAMP} />
    <circle cx='82' cy='334' r='2' fill={LAMP} />
  </g>
)

const CanneryArt = () => (
  <g>
    <circle cx='66' cy='194' r='7' fill={CREAM} opacity='0.14' />
    <circle cx='76' cy='180' r='9' fill={CREAM} opacity='0.11' />
    <circle cx='90' cy='164' r='11' fill={CREAM} opacity='0.08' />
    <rect x='56' y='206' width='16' height='56' fill='#8a3f33' />
    <rect x='53' y='202' width='22' height='7' fill='#6f3029' />
    <polygon points='-88,274 -88,244 -30,274 -30,244 28,274 28,244 88,274' fill='#6f3029' />
    <rect x='-88' y='272' width='176' height='100' fill='#b9543f' />
    <rect x='-88' y='272' width='176' height='6' fill='#8a3f33' />
    <text x='0' y='300' textAnchor='middle' fontSize='13' fontWeight='800' letterSpacing='5' fill={CREAM}>CANNERY</text>
    {[-76, -48, 32, 60].map((x) => (
      <path key={x} d={`M${x} 346 V322 A8 8 0 0 1 ${x + 16} 322 V346 Z`} fill={LAMP} />
    ))}
    <path d='M-14 372 V332 A14 14 0 0 1 14 332 V372 Z' fill='#3a211d' />
    <path d='M0 318 V372' stroke='#6f3029' strokeWidth='1.5' />
  </g>
)

const PierArt = () => (
  <g>
    <rect x='-90' y='262' width='6' height='110' fill={WOOD} />
    <rect x='84' y='262' width='6' height='110' fill={WOOD} />
    <rect x='-94' y='258' width='188' height='7' rx='2' fill={WOOD} />
    <rect x='-42' y='226' width='84' height='32' rx='7' fill='#12283d' stroke='#4cc3c7' strokeWidth='2' />
    <text x='0' y='248' textAnchor='middle' fontSize='16' fontWeight='800' letterSpacing='2' fill={CREAM}>PIER 9</text>
    <path d='M-84 268 Q-42 298 0 276 Q42 298 84 268' fill='none' stroke={CREAM} strokeWidth='1' opacity='0.6' />
    {[[-63, 280], [-42, 285], [-21, 284], [0, 276], [21, 284], [42, 285], [63, 280]].map(([x, y]) => (
      <circle key={x} cx={x} cy={y + 2} r='3' fill={LAMP} />
    ))}
    {[-56, 0, 56].map((cx) => (
      <g key={cx}>
        <rect x={cx - 21} y='328' width='42' height='44' fill='#1c3852' />
        {[0, 1, 2, 3, 4].map((stripe) => (
          <polygon
            key={stripe}
            points={`${cx - 21 + 8.4 * stripe},310 ${cx - 21 + 8.4 * (stripe + 1)},310 ${cx - 26 + 10.4 * (stripe + 1)},330 ${cx - 26 + 10.4 * stripe},330`}
            fill={stripe % 2 === 0 ? '#4cc3c7' : CREAM}
          />
        ))}
        <rect x={cx - 23} y='346' width='46' height='5' fill={WOOD} />
        <circle cx={cx - 10} cy='342' r='3.5' fill='#ee7b64' />
        <circle cx={cx} cy='342' r='3.5' fill='#f6b84b' />
        <circle cx={cx + 10} cy='342' r='3.5' fill='#86c96b' />
      </g>
    ))}
  </g>
)

const BoathouseArt = () => (
  <g>
    <polygon points='-97,306 33,306 -32,250' fill='#2e3866' />
    <rect x='-87' y='304' width='110' height='68' fill='#56659f' />
    <path d='M-87 320 H23 M-87 337 H23 M-87 354 H23' stroke='#48578f' strokeWidth='1.5' />
    <rect x='-91' y='302' width='118' height='5' fill={CREAM} />
    <circle cx='-32' cy='284' r='10' fill={LAMP} />
    <path d='M-42 284 H-22 M-32 274 V294' stroke='#2e3866' strokeWidth='1.5' />
    <rect x='-62' y='324' width='60' height='48' fill='#232b52' />
    <path d='M-62 324 L-32 372 L-2 324 M-32 324 V372 M-62 372 L-32 324 L-2 372' fill='none' stroke='#9aa8ff' strokeWidth='1.5' opacity='0.75' />
    <path d='M48 366 L44 372 M80 366 L84 372' stroke={WOOD} strokeWidth='3' />
    <path d='M34 352 H96 L85 366 H45 Z' fill={CREAM} />
    <path d='M37 356 H93' stroke='#9aa8ff' strokeWidth='2.5' />
    <path d='M65 352 V284' stroke={WOOD} strokeWidth='2.5' />
    <polygon points='68,290 68,347 93,347' fill={CREAM} />
    <polygon points='62,300 62,347 41,347' fill='#9aa8ff' />
  </g>
)

const GardenArt = () => (
  <g>
    <circle cx='-48' cy='342' r='20' fill={LAMP} opacity='0.22' />
    <path d='M-84 372 V322 A36 36 0 0 1 -12 322 V372 Z' fill='rgba(190, 235, 215, 0.2)' stroke='#bfe8d0' strokeWidth='2' />
    <path d='M-48 286 V372 M-84 322 H-12 M-66 291 V372 M-30 291 V372 M-84 347 H-12' fill='none' stroke='#bfe8d0' strokeWidth='1' opacity='0.55' />
    <circle cx='-73' cy='364' r='5' fill='#86c96b' />
    <circle cx='-58' cy='362' r='6' fill='#57a86a' />
    <circle cx='-39' cy='363' r='5.5' fill='#86c96b' />
    <circle cx='-23' cy='365' r='4.5' fill='#57a86a' />
    <rect x='31' y='316' width='6' height='56' fill='#6b4f35' />
    <circle cx='34' cy='298' r='29' fill='#3f8f5a' />
    <circle cx='24' cy='288' r='13' fill='#57a86a' />
    <circle cx='45' cy='305' r='3' fill='#ee7b64' />
    <circle cx='28' cy='312' r='3' fill='#ee7b64' />
    <circle cx='42' cy='286' r='3' fill='#ee7b64' />
    <rect x='73' y='334' width='5' height='38' fill='#6b4f35' />
    <circle cx='75.5' cy='322' r='19' fill='#57a86a' />
    <circle cx='69' cy='316' r='9' fill='#86c96b' />
    <rect x='-4' y='360' width='28' height='12' rx='2' fill={WOOD} />
    <circle cx='3' cy='357' r='3.5' fill='#86c96b' />
    <circle cx='10' cy='355' r='4' fill='#86c96b' />
    <circle cx='17' cy='357' r='3.5' fill='#86c96b' />
    <rect x='46' y='362' width='22' height='10' rx='2' fill={WOOD} />
    <circle cx='52' cy='359' r='3' fill='#86c96b' />
    <circle cx='61' cy='358' r='3.5' fill='#86c96b' />
    <ellipse cx='90' cy='370' rx='9' ry='5' fill='#22384d' />
  </g>
)

const DefaultArt = () => (
  <g>
    <polygon points='-52,316 52,316 0,272' fill='#1c3852' />
    <rect x='-42' y='314' width='84' height='58' fill='#27496a' />
    <rect x='-10' y='340' width='20' height='32' fill={LAMP} />
    <rect x='-32' y='328' width='14' height='14' fill={LAMP} />
    <rect x='18' y='328' width='14' height='14' fill={LAMP} />
  </g>
)

const venues = {
  'lighthouse-stage': { accent: '#f6b84b', Art: LighthouseArt },
  'cannery-hall': { accent: '#ee7b64', Art: CanneryArt },
  'pier-9-market': { accent: '#4cc3c7', Art: PierArt },
  'boathouse-workshop': { accent: '#9aa8ff', Art: BoathouseArt },
  'tidepool-garden': { accent: '#86c96b', Art: GardenArt }
}

const defaultVenue = { accent: CREAM, Art: DefaultArt }

export const getVenue = (slug) => venues[slug] ?? defaultVenue

export const VenueDefs = () => (
  <defs>
    <linearGradient id='beam-right' x1='0' y1='0' x2='1' y2='0'>
      <stop offset='0' stopColor={LAMP} stopOpacity='0.6' />
      <stop offset='1' stopColor={LAMP} stopOpacity='0' />
    </linearGradient>
    <linearGradient id='beam-left' x1='1' y1='0' x2='0' y2='0'>
      <stop offset='0' stopColor={LAMP} stopOpacity='0.45' />
      <stop offset='1' stopColor={LAMP} stopOpacity='0' />
    </linearGradient>
  </defs>
)
