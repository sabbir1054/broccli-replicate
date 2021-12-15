import React from 'react';
import GoToWishlist from '../../Components/Button/GoToWishlist';
import GotToCart from '../../Components/Button/GotToCart';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Sections/Products/Products';

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <Products></Products>
            <GoToWishlist></GoToWishlist>
            <GotToCart></GotToCart>
        </>
    );
};

export default HomePage;