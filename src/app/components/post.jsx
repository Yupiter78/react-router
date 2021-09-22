import React from "react";
import PropTypes from "prop-types";

const Post = ({ id, posts, history }) => {
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id);
    };
    const handleSave = () => {
        history.replace("/posts");
    };
    const post = getPostById(id);
    return (
        <>
            <h2>{post ? post.label : `Post with id: ${id} not found`}</h2>
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                Save
            </button>
        </>
    );
};
Post.propTypes = {
    id: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

export default Post;
