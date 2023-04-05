import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/friends">Friends </ActiveLink>
            <ActiveLink to ="/posts">Posts </ActiveLink>
            <ActiveLink to="/">Home </ActiveLink>
            <ActiveLink to="/contact">Contact </ActiveLink>
            <ActiveLink to="/about">About </ActiveLink>
        </nav>
    );
};

export default Header;