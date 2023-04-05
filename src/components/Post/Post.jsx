import React from 'react';

const Post = ({post}) => {
    const {id, title,body}=post;
    return (
        <div>
           <h2>ID: {id}</h2> 
           <h4>Title: {title}</h4>
           <p>{body}</p>
        </div>
    );
};

export default Post;