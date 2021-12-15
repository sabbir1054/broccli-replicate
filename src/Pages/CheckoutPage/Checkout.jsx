import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cart = useSelector((state) => state.products.cart);
    return (
      <div>
        <h4 className='text-center'>{`You add ${cart.length} Products in Cart`}</h4>
      </div>
    );
};

export default Checkout;