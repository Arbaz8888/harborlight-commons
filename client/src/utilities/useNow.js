import { useState, useEffect } from 'react'

const useNow = (interval = 1000) => {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), interval)

    return () => clearInterval(timer)
  }, [interval])

  return now
}

export default useNow
