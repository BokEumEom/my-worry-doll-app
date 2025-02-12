// src/hooks/useWorryScore.js
import { useState } from 'react'

const useWorryScore = () => {
  const [worryScore, setWorryScore] = useState(0)

  const addWorry = (increment = 10) => {
    setWorryScore(prev => prev + increment)
  }

  const resetWorry = () => {
    setWorryScore(0)
  }

  return { worryScore, addWorry, resetWorry }
}

export default useWorryScore
