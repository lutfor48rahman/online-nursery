import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = (props) => {
    // console.log(props.grandTotal);
    const {grandTotal} = props;

    const [clientSecret,setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const element = useElements()

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(grandTotal)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    },[grandTotal])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, pymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || ' ');

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>

            }
        </>
    );
};

export default CheckoutForm;