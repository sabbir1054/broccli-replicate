import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
     const wishlist = useSelector((state) => state.products.wishlist);
    return (
      <div>
        <h4 className='text-center'>{`You add ${wishlist.length} Products in Wishlist`}</h4>
      </div>
    );
};

export default Wishlist;