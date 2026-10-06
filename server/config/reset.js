import { pool } from './database.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

const createTables = async () => {
  const createTablesQuery = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      tagline VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(2) NOT NULL,
      zip VARCHAR(10) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(50) NOT NULL,
      host VARCHAR(100) NOT NULL,
      price VARCHAR(20) NOT NULL,
      starts_at TIMESTAMPTZ NOT NULL,
      location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
    );
  `

  try {
    await pool.query(createTablesQuery)
    console.log('🎉 locations and events tables created successfully')
  } catch (error) {
    console.error('⚠️ error creating tables', error)
    throw error
  }
}

const seedLocationsTable = async () => {
  const insertQuery = `
    INSERT INTO locations (slug, name, tagline, description, address, city, state, zip)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `

  for (const location of locationData) {
    const values = [
      location.slug,
      location.name,
      location.tagline,
      location.description,
      location.address,
      location.city,
      location.state,
      location.zip
    ]

    try {
      await pool.query(insertQuery, values)
      console.log(`✅ ${location.name} added successfully`)
    } catch (error) {
      console.error(`⚠️ error inserting ${location.name}`, error)
      throw error
    }
  }
}

const seedEventsTable = async () => {
  const insertQuery = `
    INSERT INTO events (title, description, category, host, price, starts_at, location_id)
    VALUES (
      $1, $2, $3, $4, $5,
      $6::timestamp AT TIME ZONE 'America/Los_Angeles',
      (SELECT id FROM locations WHERE slug = $7)
    )
  `

  for (const event of eventData) {
    const values = [
      event.title,
      event.description,
      event.category,
      event.host,
      event.price,
      event.startsAt,
      event.location
    ]

    try {
      await pool.query(insertQuery, values)
      console.log(`✅ ${event.title} added successfully`)
    } catch (error) {
      console.error(`⚠️ error inserting ${event.title}`, error)
      throw error
    }
  }
}

const reset = async () => {
  try {
    await createTables()
    await seedLocationsTable()
    await seedEventsTable()
  } finally {
    await pool.end()
  }
}

reset()
