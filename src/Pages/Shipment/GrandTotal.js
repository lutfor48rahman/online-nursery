import React from 'react';
import Cart from '../Cart/Cart';

const GrandTotal = (props) => {
    // console.log(props);
    return (
        <div>
            <p>Total Amount : {props.grandTotal}</p>
        </div>
    );
};

export default GrandTotal;