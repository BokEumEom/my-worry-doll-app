// src/pages/Home.jsx

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // 추가
import Doll from '../components/Doll';
import useWorryScore from '../hooks/useWorryScore';
import styles from '../styles/Home.module.css';

function Home() {
  const { worryScore, addWorry, resetWorry } = useWorryScore();
  const navigate = useNavigate();
  const threshold = 50; // 임계치 값

  // 인형 클릭 시, 임계치 이상이면 명상 페이지로 전환
  const handleDollClick = () => {
    if (worryScore >= threshold) {
      resetWorry();
      navigate('/meditation');
    }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Header 컴포넌트 추가 */}
      <Header />
      <main className={styles.main}>
        <div className={styles.dollWrapper}>
          <Doll worryScore={worryScore} onClick={handleDollClick} />
        </div>
        <div className={styles.controls}>
          <p className={styles.scoreText}>
            현재 걱정 점수: <span>{worryScore}</span>
          </p>
          <button className={styles.addButton} onClick={() => addWorry(10)}>
            걱정 추가 (+10)
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
