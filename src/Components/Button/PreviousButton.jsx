import React from 'react';
import styles from './Button.module.css'
const PreviousButton = () => {
  return (
    <>
      <div className={`${styles.prevBtn}`} >
        <i className={`fas fa-arrow-left ${styles.nextIcon}`}></i>
      </div>
    </>
  );
};

export default PreviousButton;