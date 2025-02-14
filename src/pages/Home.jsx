// src/pages/Home.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Doll from '../components/Doll';
import MeditationModal from '../components/MeditationModal';
import useWorryScore from '../hooks/useWorryScore';
import styles from '../styles/Home.module.css';

function Home() {
  const { worryScore, addWorry, resetWorry } = useWorryScore();
  const [showButtons, setShowButtons] = useState(false); // 임계치 달성 시 두 버튼 표시
  const [isModalOpen, setIsModalOpen] = useState(false); // 명상 모달 열림 상태
  const threshold = 50; // 임계치 값

  // 인형 클릭 시, 임계치 미만이면 점수 증가 / 임계치 이상이면 두 버튼 표시
  const handleDollClick = () => {
    if (worryScore < threshold) {
      addWorry(10);
    } else {
      // 임계치 이상이면 두 가지 버튼(명상하기, 놀아주기) 표시
      setShowButtons(true);
    }
  };

  // '명상하기' 버튼 클릭 시 모달 오픈
  const handleMeditation = () => {
    setIsModalOpen(true);
    setShowButtons(false); // 버튼 숨김
  };

  // '놀아주기' 버튼 클릭 시 다른 로직 (예시: 콘솔 출력)
  const handlePlay = () => {
    console.log("인형과 놀아주기 동작 실행");
    setShowButtons(false); // 버튼 숨김
  };

  // 모달 닫기(명상 종료 시 실행)
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
          {/* 두 버튼 표시 여부 */}
          {showButtons ? (
            <div className={styles.buttonGroup}>
              <button
                className={styles.optionButton}
                onClick={handleMeditation}
              >
                명상하기
              </button>
              <button
                className={styles.optionButton}
                onClick={handlePlay}
              >
                놀아주기
              </button>
            </div>
          ) : null}
        </div>
      </main>

      {/* 명상 모달이 열려있다면 표시 */}
      {isModalOpen && <MeditationModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Home;
