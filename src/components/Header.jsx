// src/components/Header.jsx

import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>걱정인형</h1>
      {/* 필요 시 로고나 추가 네비게이션 요소를 여기에 삽입 */}
    </header>
  );
}

export default Header;
