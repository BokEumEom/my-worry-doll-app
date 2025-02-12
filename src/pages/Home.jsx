// src/pages/Home.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Doll from '../components/Doll';
import MeditationModal from '../components/MeditationModal';
import useWorryScore from '../hooks/useWorryScore';
import styles from '../styles/Home.module.css';

function Home() {
  const { worryScore, addWorry, resetWorry } = useWorryScore();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const threshold = 50; // 임계치 값

  // 인형 클릭 시, worryScore가 임계치 미만이면 점수를 증가,
  // 임계치 이상이면 모달을 엽니다.
  const handleDollClick = () => {
    if (worryScore < threshold) {
      addWorry(10);
    } else {
      setIsModalOpen(true);
    }
  };

  // 모달 닫기 (명상 종료 시 실행)
  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetWorry();
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <main className={styles.main}>
        <div className={styles.dollWrapper}>
          <Doll worryScore={worryScore} onClick={handleDollClick} />
        </div>
        <div className={styles.controls}>
          <p className={styles.scoreText}>
            현재 걱정 점수: <span>{worryScore}</span>
          </p>
          {/* "걱정 추가" 버튼을 제거하였습니다 */}
        </div>
      </main>

      {isModalOpen && <MeditationModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Home;
