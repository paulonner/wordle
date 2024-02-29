import { useEffect, useState, useRef } from 'react'

const useTime = (initialTime: number) => {
  const [ time, setTime ] = useState(initialTime)
  const intervalRef = useRef<number>()
  const [ start, setStart ] = useState<boolean>(false)

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`

  useEffect(() => {
    if (!start) return

    intervalRef.current = setInterval(() => {
      setTime(time => time === 0 ? initialTime : time - 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [start])

  const startTime = () => {
    setStart(true)
  }

  return {
    time,
    formattedTime,
    start,
    startTime
  }
}

export default useTime