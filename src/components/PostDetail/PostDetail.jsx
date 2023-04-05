import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const data = useLoaderData();
    console.log(data)
    const {id, title,body}=data;
    return (
        <div>
            <h1>this is post detail of {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;