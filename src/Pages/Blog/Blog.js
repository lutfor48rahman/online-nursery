import React, { useEffect, useState } from 'react';
import BlogView from './BlogView';

const Blog = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/addBlog')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBlogs(data)});
    },[])
    return (
        <div>
            {
                blogs.map(blog=> <BlogView
                key={blog._id}
                blog={blog}
                ></BlogView>)
            }
        </div>
    );
};

export default Blog;