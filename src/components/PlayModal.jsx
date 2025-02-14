// src/components/PlayModal.jsx

import styles from '../styles/PlayModal.module.css';

function PlayModal({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <video className={styles.videoPlayer} controls autoPlay>
          <source src="/assets/play.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className={styles.closeButton} onClick={onClose}>
          모달 닫기
        </button>
      </div>
    </div>
  );
}

export default PlayModal;
