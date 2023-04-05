import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id, title,body}=data;

    const navigate = useNavigate();
    const handleBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>this is post detail of {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default PostDetail;