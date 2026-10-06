import request from './request'

const getAllEvents = () => request('/api/events')

const getEventById = (id) => request(`/api/events/${id}`)

const getEventsByLocation = (slug) => request(`/api/locations/${slug}/events`)

export default { getAllEvents, getEventById, getEventsByLocation }
