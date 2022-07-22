import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product,handleAddToCart,handleQuantity}) => {
     // const {product, handleAddToCart} = props;
     const { name, img, description, price,stock } = product;
    
     return (
         <div className='product'>
             <img src={img} alt=""></img>
             <div className='product-info'>
                 <p className='product-name'>{name}</p>
                 <p>Price: {price}</p>
                 <p>Stock:{stock}</p>
                 <p><small>Description:{description.slice(0,80)}</small></p>
                 {/* <p><small>Description: {description.length>70?`${description.slice(0,70)}...read more`:description}</small></p> */}
             </div>
             <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                 <p className='btn-text'>Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>
         </div>
     );
 };

export default Product;