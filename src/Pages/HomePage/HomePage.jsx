import React from 'react';
import GoToWishlist from '../../Components/Button/GoToWishlist';
import GotToCart from '../../Components/Button/GotToCart';
import Header from '../../Components/Header/Header';
import FeatureProducts from '../../Components/Sections/FeaturedProducts/FeatureProducts';
import Products from '../../Components/Sections/Products/Products';

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <Products></Products>
            <GoToWishlist></GoToWishlist>
            <GotToCart></GotToCart>
            <FeatureProducts></FeatureProducts>
        </>
    );
};

export default HomePage;