import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <Review
                        key={product._id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='cartButton' onClick={()=>navigate('/shipment')}>Proceed shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;