"use client";
import React from "react";
import UserPost from "./UserPost";
import {Button} from "@/components/ui/button";

const UserPostsList = ({ userPosts, deletePost }) => {
  // console.log('Rendering UserPostsList component');

  return (
    <div className="px-1">
      {userPosts.map((post) => (
        <div key={post.id} className="my-1 box flex-row">
          <UserPost post={post} />
          <Button
            variant="destructive"
            data-post-id={post.id}
            onClick={deletePost}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserPostsList);
