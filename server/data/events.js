const eventData = [
  {
    location: 'lighthouse-stage',
    title: 'Foghorn Folk Night',
    description: 'Fiddles, a washtub bass and sea shanties you will know by the second chorus.',
    category: 'Music',
    host: 'Saltwater String Band',
    price: 'Free',
    startsAt: '2026-09-12 19:00'
  },
  {
    location: 'lighthouse-stage',
    title: 'Movies Under the Beam: Local Shorts',
    description: 'Nine short films made within ten miles of the harbor, projected on the band shell wall.',
    category: 'Film',
    host: 'Harborlight Film Club',
    price: '$5',
    startsAt: '2026-10-09 19:30'
  },
  {
    location: 'lighthouse-stage',
    title: 'Harbor Brass Sunset Concert',
    description: 'A twelve-piece brass band plays the sun down. Hot cider at the gate.',
    category: 'Music',
    host: 'Harbor Brass Collective',
    price: 'Free',
    startsAt: '2026-10-24 17:30'
  },
  {
    location: 'lighthouse-stage',
    title: 'Open Mic at the Light',
    description: 'Five minutes each for songs, poems and stories. Sign-up sheet opens thirty minutes before.',
    category: 'Music',
    host: 'Marisol Oduya',
    price: 'Free',
    startsAt: '2026-11-14 18:00'
  },
  {
    location: 'lighthouse-stage',
    title: 'Winter Lantern Lighting',
    description: 'Paper lanterns carried from the pier to the point, then the keeper switches on the winter lamp.',
    category: 'Festival',
    host: 'Friends of Beacon Point',
    price: 'Free',
    startsAt: '2026-12-05 17:00'
  },
  {
    location: 'cannery-hall',
    title: 'Town Hall: The Seawall Repair Plan',
    description: 'The harbor engineer walks through three options for the north seawall and takes questions.',
    category: 'Civic',
    host: 'Harborlight Neighborhood Council',
    price: 'Free',
    startsAt: '2026-09-22 18:30'
  },
  {
    location: 'cannery-hall',
    title: 'Contra Dance with The Reel Deal',
    description: 'Every dance is taught first and no partner is needed. Wear shoes that slide.',
    category: 'Dance',
    host: 'Wharf Street Dancers',
    price: '$8',
    startsAt: '2026-10-03 19:00'
  },
  {
    location: 'cannery-hall',
    title: 'Harborlight Makers Fair',
    description: 'Sixty tables of pottery, prints, knitwear and woodwork from people who live here.',
    category: 'Market',
    host: 'Harborlight Makers Guild',
    price: 'Free',
    startsAt: '2026-10-17 10:00'
  },
  {
    location: 'cannery-hall',
    title: 'Chowder Cook-Off',
    description: 'Fourteen pots, one ladle each and a ballot. Last year the lighthouse keeper won.',
    category: 'Food',
    host: 'Cannery Hall Kitchen Crew',
    price: '$10',
    startsAt: '2026-11-07 12:00'
  },
  {
    location: 'cannery-hall',
    title: 'New Year\'s Eve Sock Hop',
    description: 'Shoes off at the door, records until midnight and a countdown from the mezzanine.',
    category: 'Dance',
    host: 'Wharf Street Dancers',
    price: '$15',
    startsAt: '2026-12-31 20:00'
  },
  {
    location: 'pier-9-market',
    title: 'Night Market: End of Summer',
    description: 'The last warm-weather night market of the year, with thirty stalls and a brass duo.',
    category: 'Market',
    host: 'Pier 9 Vendors Association',
    price: 'Free',
    startsAt: '2026-09-18 17:00'
  },
  {
    location: 'pier-9-market',
    title: 'Dockside Coffee & Neighbors',
    description: 'A standing Monday coffee for anyone new to town or just new to mornings.',
    category: 'Community',
    host: 'Imani Brathwaite',
    price: 'Free',
    startsAt: '2026-10-05 08:00'
  },
  {
    location: 'pier-9-market',
    title: 'Night Market: Harvest Moon',
    description: 'Squash, smoked fish, cider donuts and lantern making for kids at the end of the pier.',
    category: 'Market',
    host: 'Pier 9 Vendors Association',
    price: 'Free',
    startsAt: '2026-10-23 17:00'
  },
  {
    location: 'pier-9-market',
    title: 'Oyster Shucking 101',
    description: 'Learn to open a dozen without opening your hand. Knife and glove provided.',
    category: 'Workshop',
    host: 'Tomas Lindqvist',
    price: '$20',
    startsAt: '2026-11-12 18:00'
  },
  {
    location: 'boathouse-workshop',
    title: 'Repair Café: Bikes & Small Appliances',
    description: 'Bring a flat tire, a dead toaster or a wobbly lamp and fix it alongside a volunteer.',
    category: 'Workshop',
    host: 'Boathouse Fixers',
    price: 'Free',
    startsAt: '2026-09-26 10:00'
  },
  {
    location: 'boathouse-workshop',
    title: 'Knots & Splices for Beginners',
    description: 'Six knots that hold and one eye splice, taught with rope you get to keep.',
    category: 'Workshop',
    host: 'Captain Ruth Abernathy',
    price: '$5',
    startsAt: '2026-10-11 13:00'
  },
  {
    location: 'boathouse-workshop',
    title: 'Build a Cedar Birdhouse',
    description: 'A kids-and-grown-ups build with pre-cut cedar, small hammers and a lot of sanding.',
    category: 'Workshop',
    host: 'Boathouse Fixers',
    price: '$12',
    startsAt: '2026-10-31 10:00'
  },
  {
    location: 'boathouse-workshop',
    title: 'Tool Library Open House',
    description: 'Get a library card, tour the wall of tools and borrow something the same day.',
    category: 'Community',
    host: 'Harborlight Tool Library',
    price: 'Free',
    startsAt: '2026-11-21 11:00'
  },
  {
    location: 'tidepool-garden',
    title: 'Sunrise Yoga on the Shore',
    description: 'An hour of slow stretching on the flat rocks while the fishing boats head out.',
    category: 'Wellness',
    host: 'Priya Venkataraman',
    price: 'Free',
    startsAt: '2026-09-05 06:30'
  },
  {
    location: 'tidepool-garden',
    title: 'Low-Tide Tidepool Walk',
    description: 'A naturalist-led walk at the lowest tide of the month. Expect anemones, sculpins and wet shoes.',
    category: 'Nature',
    host: 'Harborlight Shore Stewards',
    price: 'Free',
    startsAt: '2026-10-06 07:15'
  },
  {
    location: 'tidepool-garden',
    title: 'Fall Planting Day',
    description: 'Garlic, fava beans and cover crop go in the ground. Gloves and trowels are in the shed.',
    category: 'Volunteer',
    host: 'Tidepool Garden Committee',
    price: 'Free',
    startsAt: '2026-10-18 09:00'
  },
  {
    location: 'tidepool-garden',
    title: 'Beach Cleanup & Potluck',
    description: 'Two hours with a bucket along the shoreline, then lunch at the long table in the greenhouse.',
    category: 'Volunteer',
    host: 'Harborlight Shore Stewards',
    price: 'Free',
    startsAt: '2026-11-08 10:00'
  },
  {
    location: 'tidepool-garden',
    title: 'Winter Seed Swap',
    description: 'Bring labeled envelopes of whatever you saved this year and trade for something new.',
    category: 'Community',
    host: 'Tidepool Garden Committee',
    price: 'Free',
    startsAt: '2026-12-12 11:00'
  }
]

export default eventData
