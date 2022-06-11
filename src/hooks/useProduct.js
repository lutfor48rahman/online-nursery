import { useEffect, useState } from "react"

const useProduct = ()=>{
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:5000/product`;
        // fetch('products.json')
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}

export default useProduct;