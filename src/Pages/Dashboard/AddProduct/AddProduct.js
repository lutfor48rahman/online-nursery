import React from 'react';
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        const url = `http://localhost:5000/product`; 
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            
                toast(`New Product are added!!!`);
        })
      
    };

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-3xl text-emerald-400 mb-5'>Adding Product </h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='photo url' type="text" {...register("img")} /> <br />
                <textarea className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='description' {...register("description",)} /> <br />
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='price' type="number" {...register("price")} /> <br />
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='Stock' type="number" {...register("stock")} /> <br />
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='Shipping' type="number" {...register("shipping")} /> <br />
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='Quantity' type="number" {...register("quantity")} /> <br />
                {/* <input className='bg-sky-500/75 w-96' type="submit" value="Submit" /> */}
                <input className='bg-sky-500/75 w-96 rounded-md p-3 text-xl text-white' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;