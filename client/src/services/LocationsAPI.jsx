import request from './request'

const getAllLocations = () => request('/api/locations')

const getLocationBySlug = (slug) => request(`/api/locations/${slug}`)

export default { getAllLocations, getLocationBySlug }
