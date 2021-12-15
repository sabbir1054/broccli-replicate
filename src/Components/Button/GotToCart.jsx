import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Button.module.css'
const GotToCart = () => {
    const cart = useSelector(state=>state.products.cart);
  

    return (
      <>
        <Link to="/cart">
          <span className={styles.icon}>
                    Show <i className="fas fa-shopping-cart"></i> <h5 className='inline-block'> { cart.length}</h5>
          </span>
        </Link>
      </>
    );
};

export default GotToCart;