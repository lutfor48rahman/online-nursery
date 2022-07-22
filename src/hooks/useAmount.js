// import { useEffect } from "react";
// import useCart from "./useCart"
// import useProduct from "./useProduct";

// const useAmount = ()=>{
//     const [products, setProducts] = useProduct();
//     const [cart] = useCart(products);
//     console.log(cart);
//    useEffect(()=>{
//     let total = 0;
//     let shipping = 0;
//     let quantity = 0;
//     for(const product of cart){
//         quantity = quantity + product.quantity;
//         total = total + product.price * product.quantity;
//         shipping = shipping + product.shipping;
//     }
//     const tax = parseFloat((total * 0.1).toFixed(2));
//     const grandTotal = total + shipping + tax;
//     console.log(grandTotal);
//     console.log('hello');
//    },[])
// }