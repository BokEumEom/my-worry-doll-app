// src/hooks/useWorryScore.js
import { useState } from 'react';

const useWorryScore = () => {
  const [worryScore, setWorryScore] = useState(0);

  const addWorry = (increment = 10) => {
    setWorryScore(prev => {
      console.log("worryScore 업데이트: 이전 =", prev, "새 값 =", prev + increment);
      return prev + increment;
    });
  };

  const resetWorry = () => {
    console.log("worryScore 초기화");
    setWorryScore(0);
  };

  return { worryScore, addWorry, resetWorry };
};

export default useWorryScore;
