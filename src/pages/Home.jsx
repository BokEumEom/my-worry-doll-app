// src/pages/Home.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Doll from '../components/Doll';
import MeditationModal from '../components/MeditationModal';
import PlayModal from '../components/PlayModal';
import useWorryScore from '../hooks/useWorryScore';
import styles from '../styles/Home.module.css';

function Home() {
  const { worryScore, addWorry, resetWorry } = useWorryScore();
  const [showButtons, setShowButtons] = useState(false); // 두 버튼 표시 여부
  const [isMeditationModalOpen, setIsMeditationModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const threshold = 50; // 임계치 값

  // 인형 클릭 시: worryScore가 임계치 미만이면 점수 증가, 이상이면 두 버튼 표시
  const handleDollClick = () => {
    if (worryScore < threshold) {
      addWorry(10);
    } else {
      setShowButtons(true);
    }
  };

  // '명상하기' 버튼 클릭 시 모달 열기
  const handleMeditation = () => {
    setIsMeditationModalOpen(true);
    setShowButtons(false);
  };

  // '놀아주기' 버튼 클릭 시 PlayModal 열기
  const handlePlay = () => {
    setIsPlayModalOpen(true);
    setShowButtons(false);
  };

  // 모달 닫기 시: 명상 모달 닫기 후 worryScore 초기화
  const handleCloseMeditation = () => {
    setIsMeditationModalOpen(false);
    resetWorry();
  };

  // 모달 닫기 시: 놀아주기 모달 닫기 후 worryScore 초기화
  const handleClosePlay = () => {
    setIsPlayModalOpen(false);
    resetWorry();
  };

  return (
    <div className={styles.homeContainer}>
      {/* 백그라운드 비디오를 play.mp4 에셋으로 변경 */}
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline  // iOS에서 자동 재생을 위해 필요
      >
        <source src="/assets/play.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <Header />
      <main className={styles.main}>
        <div className={styles.dollWrapper}>
          <Doll worryScore={worryScore} onClick={handleDollClick} />
        </div>
        <div className={styles.controls}>
          {showButtons && (
            <div className={styles.buttonGroup}>
              <button className={styles.optionButton} onClick={handleMeditation}>
                명상하기
              </button>
              <button className={styles.optionButton} onClick={handlePlay}>
                놀아주기
              </button>
            </div>
          )}
        </div>
      </main>

      {isMeditationModalOpen && (
        <MeditationModal onClose={handleCloseMeditation} />
      )}
      {isPlayModalOpen && <PlayModal onClose={handleClosePlay} />}
    </div>
  );
}

export default Home;
