import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipment.css';

const Shipment = () => {

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
    // const handleEmailBlur = (event) =>{
    //     setEmail(event.target.value);
    // }

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    }

    const handleShipment = (event) => {
        event.preventDefault();

        const shipping = { name, email, address, phone };
        alert(JSON.stringify(shipping));

    }
    return (
        // <div className='form-control form-container'>
        //     <div>
        //         <h2 className='form-title'>Order Shipping</h2>
        //         <form className='form-control' onSubmit={handleShipment}>
        //             <div className="input-group">
        //                 <label htmlFor="name">Your Name</label>
        //                 <input onBlur={handleNameBlur} type="text" name='name' required />
        //             </div>
        //             <div className="input-group">
        //                 <label htmlFor="email">Email</label>
        //                 <input value={user?.email} readOnly type="email" name='email' required />
        //             </div>
        //             <div className="input-group">
        //                 <label htmlFor="address">Address</label>
        //                 <input onBlur={handleAddressBlur} type="text" name='address' required />
        //             </div>
        //             <div className="input-group">
        //                 <label htmlFor="phone">Phone</label>
        //                 <input onBlur={handlePhoneBlur} type="text" name='phone' required />
        //             </div>
        //             <input className='form-submit' type="submit" value="Add Shipping" />
        //         </form>

        //     </div>
        // </div>

        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Your address" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" disabled value={user.email} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Phone number" class="input input-bordered w-full max-w-xs" /> <br />
                    <input type="submit" value="SHIPPING" class="input input-bordered w-full max-w-xs submitButton" />
                </div>
            </div>
        </div>
    );
};

export default Shipment;