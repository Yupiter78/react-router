import React from "react";
import PropTypes from "prop-types";

const Post = ({ id, posts }) => {
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id);
    };
    const post = getPostById(id);
    return <h2>{post ? post.label : `Post with id: ${id} not found`}</h2>;
};
Post.propTypes = {
    id: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
};

export default Post;
