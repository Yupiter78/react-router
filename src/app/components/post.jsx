import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
    const history = useHistory();
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id);
    };
    const handleSave = () => {
        history.push("/posts");
    };
    const post = getPostById(id);
    return (
        <>
            <h2>{post ? post.label : `Post with id: ${id} not found`}</h2>
            <button onClick={handleSave}>Save</button>
        </>
    );
};
Post.propTypes = {
    id: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
};

export default Post;
