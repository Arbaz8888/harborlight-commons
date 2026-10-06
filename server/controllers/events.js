import { pool } from '../config/database.js'

const EVENT_QUERY = `
  SELECT
    events.id,
    events.title,
    events.description,
    events.category,
    events.host,
    events.price,
    events.starts_at AS "startsAt",
    events.location_id AS "locationId",
    locations.slug AS "locationSlug",
    locations.name AS "locationName"
  FROM events
  JOIN locations ON locations.id = events.location_id
`

const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      `${EVENT_QUERY} ORDER BY events.starts_at ASC, events.id ASC`
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventById = async (req, res) => {
  const eventId = parseInt(req.params.eventId)

  if (Number.isNaN(eventId)) {
    return res.status(400).json({ error: 'eventId must be a number' })
  }

  try {
    const results = await pool.query(
      `${EVENT_QUERY} WHERE events.id = $1`,
      [eventId]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({ error: `No event with id ${eventId}` })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventsByLocation = async (req, res) => {
  const { slug } = req.params

  try {
    const location = await pool.query(
      'SELECT id FROM locations WHERE slug = $1',
      [slug]
    )

    if (location.rows.length === 0) {
      return res.status(404).json({ error: `No location called ${slug}` })
    }

    const results = await pool.query(
      `${EVENT_QUERY} WHERE events.location_id = $1 ORDER BY events.starts_at ASC, events.id ASC`,
      [location.rows[0].id]
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default { getEvents, getEventById, getEventsByLocation }
