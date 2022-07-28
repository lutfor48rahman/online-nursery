import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = (props) => {

    const {grandTotal} = props;
    const {displayName,email} = props;
    // console.log(displayName);

    const [clientSecret,setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const stripe = useStripe();
    const element = useElements()

    useEffect(()=>{

       if(grandTotal){
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({grandTotal})
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
       }
    },[grandTotal])


    const handleSubmit =async (event) => {
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
        setSuccess('');

        // Payment confirm

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: displayName,
                  email:email
                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message);
          }
          else{
            setCardError('');
            console.log(paymentIntent);
            setSuccess('Congrates ! Your payment is Complete!!');
          }

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
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>

            }
            {
                success && <p className='text-green-500'>{success}</p>

            }
        </>
    );
};

export default CheckoutForm;