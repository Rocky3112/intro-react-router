import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id, title,body}=post;
    return (
        <div className='post'>
           <h2>ID: {id}</h2> 
           <h4>Title: {title}</h4>
           <p>{body}</p>
           <Link to ={`/post/${id}`}>Show details </Link>
           <Link to ={`/post/${id}`}><button>Show post details</button></Link>
           
        </div>
    );
};

export default Post;