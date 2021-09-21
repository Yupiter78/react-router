import React from "react";
import PropTypes from "prop-types";

const PostsList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <h3 key={post.id}>{post.label}</h3>
            ))}
        </>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;
