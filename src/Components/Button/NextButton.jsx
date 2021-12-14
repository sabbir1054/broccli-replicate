import React from 'react';
import styles from './Button.module.css'
const NextButton = ( ) => {
  return (
    <>
      <div
        className={`${styles.nextBtn} `}
        id="nextButton"
        
      >
        <i className={`fas fa-arrow-right ${styles.nextIcon}`}></i>
      </div>
    </>
  );
};

export default NextButton;