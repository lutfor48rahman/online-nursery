import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import CheckoutForm from './CheckoutForm';
import './Shipment.css';

const Shipment = () => {
    const [products,setProducts] = useProduct();
    const [amount,setAmount]= useCart(products);
    // console.log(products);
    // console.log(amount);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of amount){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    // console.log(grandTotal);

    const stripePromise = loadStripe('pk_test_51LOBXRDFXCGEFnWMJW4PdvJSRNX5SWqvVqyktc9xw14cL0bR55adP5uG1kgNKty2z3pNUFcaR3qNrSKQoSnhmg0l00j1ixr0Y0');


    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();



    // if(user){
    //     navigate('/login');
    // }

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    }

    const handleShipment = (event) => {
        event.preventDefault();

        const shipping = { name, email,address, phone };
        const stringShipping = JSON.stringify(shipping);
        alert(JSON.stringify(shipping));

    }
    return (

        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">
                <form className='form-control' onSubmit={handleShipment}>
                    <div class="form-control w-full max-w-xs">
                        <label htmlFor="name">Your Name</label>
                        <input class="input input-bordered w-full max-w-xs" onMouseMove={handleNameBlur} type="text" name='name' value={user?.displayName} required />
                        <label htmlFor="address">Address</label>
                        <input class="input input-bordered w-full max-w-xs" onChange={handleAddressBlur} type="text" name='address' placeholder='Address' required />
                        <label htmlFor="phone">Email</label>
                        <input onMouseMove={handleEmailBlur} type="email" name='email' value={user?.email} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label htmlFor="phone">Phone</label>
                        <input class="input input-bordered w-full max-w-xs" onChange={handlePhoneBlur} type="text" name='phone' placeholder='Phone number' required /> <br />
                        <input type="submit" value="SHIPPING" class="input input-bordered w-full max-w-xs submitButton" />
                        <p className='text-green-500 text-xl font-bold'>Total Amount : {grandTotal}</p>
                       
                    </div>
                </form>
            </div>
            <div className='card-body'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    grandTotal={grandTotal}
                     />
                </Elements>
            </div>
        </div>
    );
};

export default Shipment;
