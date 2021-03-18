import React from 'react';

import UserPosts from "./user-posts/UserPosts";
import LikedPosts from "./liked-posts/LikedPosts";

const ProfileWall = () => {

    return <div>
        <h1>Your posts</h1>
        <UserPosts/>
        <h1>Liked posts</h1>
        <LikedPosts/>
    </div>;
};

export default ProfileWall;
