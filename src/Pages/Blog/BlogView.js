import React from 'react';
import { Link } from 'react-router-dom';

const BlogView = ({ blog }) => {
    const { name, img, description } = blog;
    console.log(img);
    return (
        <div class="card w-full max-h-full">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary"> <a href='https://www.sarasotachabad.com/preschool'> Read</a> More</button>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>
        </div>
    );
};

export default BlogView;