const request = async (path) => {
  const response = await fetch(path)
  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const error = new Error(data?.error || `Request failed with status ${response.status}`)
    error.status = response.status
    throw error
  }

  return data
}

export default request
