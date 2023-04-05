import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h2>ID: {id}</h2>
      <h4>Title: {title}</h4>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show details </Link>
      <Link to={`/post/${id}`}>
        <button>Show post details</button>
      </Link>

      <button onClick={handleNavigation}>button Handler</button>
    </div>
  );
};

export default Post;
