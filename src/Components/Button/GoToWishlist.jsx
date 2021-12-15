import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Button.module.css'
const GoToWishlist = () => {
    const wishlist = useSelector((state) => state.products.wishlist);
  
    return (
      <>
        <Link to="/wishlist">
          <span className={styles.icon2}>
            Show <i class="fas fa-heart"></i>{" "}
            <h5 className="inline-block">{wishlist.length}</h5>
          </span>
        </Link>
      </>
    );
};

export default GoToWishlist;