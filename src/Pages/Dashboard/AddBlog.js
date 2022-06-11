import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const imageStorageKey = 'dda575c25e356160f275a5e36cd35bbd';
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    // console.log(img);
                    const blog = {
                        name: data.name,
                        img: img,
                        description: data.description
                    }
                    fetch('http://localhost:5000/addBlog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(data2 => {
                            console.log('blog',data2);

                            toast(`New Blog are added!!!`);
                        })
                }
            })
        // console.log(data);
        // const url = `http://localhost:5000/addBlog`; 


    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-4xl text-pink-600 text-bold mb-5'>Question and Answer</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='কাজের পদ্ধতি' {...register("name", { required: true, maxLength: 1000 })} /> <br />
                {/* <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='পিকচার' type="text" {...register("img")} /> <br /> */}
                <input className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='পিকচার' type="file" {...register("img")} /> <br />
                <textarea className='mb-2 border-2 border-indigo-600 rounded-md w-96' placeholder='কাজের বিবরণী' {...register("description",)} /> <br />
                <input className='bg-sky-500/75 w-96 rounded-md p-3 text-xl text-white' type="submit" value='ADD' />
            </form>
        </div>
    );
};

export default AddBlog;