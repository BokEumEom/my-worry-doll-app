// src/pages/Meditation.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import meditationData from '../data/meditationData';
import styles from '../styles/Meditation.module.css';

function Meditation() {
  const navigate = useNavigate();
  // 예시로 데이터 중 첫 번째 항목을 선택 (원하는 로직으로 변경 가능)
  const session = meditationData[0];
  const [timeLeft, setTimeLeft] = useState(session.duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/');
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, navigate]);

  const handleEndSession = () => {
    navigate('/');
  };

  return (
    <div className={styles.meditationContainer}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>{session.title}</h2>
          {/* 명상 이미지 추가 */}
          <img src={session.image} alt={session.title} className={styles.sessionImage} />
          <p className={styles.timer}>
            남은 시간: <span>{timeLeft}</span>초
          </p>
          <p className={styles.description}>{session.description}</p>
          <p className={styles.guidance}>{session.guidance}</p>
          <button className={styles.endButton} onClick={handleEndSession}>
            세션 종료
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meditation;
