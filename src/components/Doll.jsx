// src/components/Doll.jsx

import styles from '../styles/Doll.module.css';

function Doll({ worryScore, onClick }) {
  const scaleValue = 1 + worryScore / 100;
  const mistOpacity = Math.min(worryScore / 100, 0.8);
  const mistBlur = mistOpacity * 5;

  return (
    <div
      className={styles.dollContainer}
      onClick={() => {
        console.log("Doll 컴포넌트 클릭됨, worryScore:", worryScore);
        onClick();
      }}
    >
      <div
        className={styles.doll}
        style={{
          transform: `scale(${scaleValue})`,
          willChange: 'transform, opacity',
        }}
      >
        <img src="/assets/doll.png" alt="Worry Doll" className={styles.dollImage} />
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
