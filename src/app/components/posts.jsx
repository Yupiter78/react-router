import React from "react";
import PropTypes from "prop-types";
import Post from "./post";
import PostsList from "./postsList";

const Posts = ({ match, history }) => {
    const posts = [
        { id: 1, label: "post 1" },
        { id: 2, label: "post 2" },
        { id: 3, label: "post 3" }
    ];

    const postId = match.params.postId;

    return (
        <>
            {postId ? (
                <Post id={postId} posts={posts} history={history} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};
Posts.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Posts;
