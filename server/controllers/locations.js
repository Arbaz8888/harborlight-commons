import { pool } from '../config/database.js'

const LOCATION_QUERY = `
  SELECT
    locations.id,
    locations.slug,
    locations.name,
    locations.tagline,
    locations.description,
    locations.address,
    locations.city,
    locations.state,
    locations.zip,
    COUNT(events.id)::int AS "eventCount",
    (COUNT(events.id) FILTER (WHERE events.starts_at > NOW()))::int AS "upcomingCount"
  FROM locations
  LEFT JOIN events ON events.location_id = locations.id
`

const getLocations = async (req, res) => {
  try {
    const results = await pool.query(
      `${LOCATION_QUERY} GROUP BY locations.id ORDER BY locations.id ASC`
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getLocationBySlug = async (req, res) => {
  const { slug } = req.params

  try {
    const results = await pool.query(
      `${LOCATION_QUERY} WHERE locations.slug = $1 GROUP BY locations.id`,
      [slug]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({ error: `No location called ${slug}` })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default { getLocations, getLocationBySlug }
