import React, { useState, useEffect } from 'react';
import meditationData from '../data/meditationData';
import styles from '../styles/MeditationModal.module.css';

function MeditationModal({ onClose }) {
  // 선택된 명상 세션 정보를 저장하는 상태
  const [session, setSession] = useState(null);
  // 타이머를 session.duration으로 초기화할 상태
  const [timeLeft, setTimeLeft] = useState(0);

  // 컴포넌트 마운트 시, 명상 데이터를 무작위로 선택합니다.
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * meditationData.length);
    const chosenSession = meditationData[randomIndex];
    setSession(chosenSession);
    setTimeLeft(chosenSession.duration);
  }, []);

  // 타이머 로직
  useEffect(() => {
    if (!session) return; // session이 아직 설정되지 않았다면 대기
    if (timeLeft <= 0) {
      onClose(); // 타이머가 0이 되면 모달 종료
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, session, onClose]);

  // session이 아직 로드되지 않은 경우 로딩 상태 또는 null 반환
  if (!session) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>{session.title}</h2>
        <img src={session.image} alt={session.title} className={styles.sessionImage} />
        <p className={styles.timer}>
          남은 시간: <span>{timeLeft}</span>초
        </p>
        <p className={styles.description}>{session.description}</p>
        <p className={styles.guidance}>{session.guidance}</p>
        <button className={styles.endButton} onClick={onClose}>
          세션 종료
        </button>
      </div>
    </div>
  );
}

export default MeditationModal;
