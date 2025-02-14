// src/components/PlayModal.jsx
import styles from '../styles/PlayModal.module.css';

function PlayModal({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* MP4 대신 GIF 이미지 사용 */}
        <img src="/assets/play.gif" alt="Play Animation" className={styles.playGif} />
        <button className={styles.closeButton} onClick={onClose}>
          종료
        </button>
      </div>
    </div>
  );
}

export default PlayModal;
