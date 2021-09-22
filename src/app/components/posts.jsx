import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import PostsList from "./postsList";
import query from "query-string";
import _ from "lodash";

const Posts = ({ match, location }) => {
    const posts = [
        { id: 1, label: "post 1" },
        { id: 2, label: "post 2" },
        { id: 3, label: "post 3" }
    ];
    const search = query.parse(location.search);
    const postId = match.params.postId;
    console.log("search:", search);
    const cropPosts = search
        ? _(posts).slice(0).take(search.count).value()
        : posts;
    return (
        <>
            {postId ? (
                <Post id={postId} posts={posts} />
            ) : (
                <PostsList posts={cropPosts} />
            )}
        </>
    );
};
Posts.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default Posts;
