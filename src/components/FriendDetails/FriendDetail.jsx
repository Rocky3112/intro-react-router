import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>show this friend detsils</h1>
            <h4>Name: {friend.name}</h4>
            <p>phone:{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;