import React from 'react';
import styles from './Button.module.css'


const Button = ({text}) => {
    
    return (
      <>
        <button className={styles.hvr_sweep_to_right}>{text} </button>
      </>
    );
};

export default Button;