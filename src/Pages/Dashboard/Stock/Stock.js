import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useCart from '../../../hooks/useCart';

const Stock = () => {
    const [stocks,setStocks] = useState([]);
    // const [cart,setCart] = useCart();

    useEffect(()=>{
        fetch('http://localhost:5000/stockProduct')
        .then(res=>res.json())
        .then(data=>setStocks(data))
    },[])
    // console.log(cart);
    return (
        <div>
            <h1>this stock section</h1>
            {
                stocks.map(stock=><h1>{stock.stock}</h1>)
            }
        </div>
    );
};

export default Stock;