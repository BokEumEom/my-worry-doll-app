// src/components/Doll.jsx

import styles from '../styles/Doll.module.css';

function Doll({ worryScore, onClick }) {
  // 걱정 점수에 따라 인형의 scale 계산
  const scaleValue = 1 + worryScore / 100; // 예: worryScore가 50이면 scale = 1.5
  // 걱정 점수에 따라 미스트 효과 계산 (최대 0.8 opacity, 0~4px blur)
  const mistOpacity = Math.min(worryScore / 100, 0.8);
  const mistBlur = mistOpacity * 5; // 0~4px 정도

  return (
    <div className={styles.dollContainer} onClick={onClick}>
      <div
        className={styles.doll}
        style={{
          transform: `scale(${scaleValue})`,
          willChange: 'transform, opacity',
        }}
      >
        <img src="/assets/doll-new.png" alt="Worry Doll" className={styles.dollImage} />
      </div>
      <div
        className={styles.mist}
        style={{
          opacity: mistOpacity,
          filter: `blur(${mistBlur}px)`,
        }}
      ></div>
    </div>
  );
}

export default Doll;
