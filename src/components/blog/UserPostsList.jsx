"use client";
import React from "react";
import UserPost from "./UserPost";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const UserPostsList = ({ userPosts, deletePost }) => {
  // console.log('Rendering UserPostsList component');

  return (
    <Card className="px-1">
      {userPosts.map((post) => (
        <CardContent key={post.id} className="my-1 flex gap-2 items-center justify-between">
          <UserPost post={post} />
          <Button
            variant="destructive"
            data-post-id={post.id}
            onClick={deletePost}
          >
            Delete
          </Button>
        </CardContent>
      ))}
    </Card>
  );
};

export default React.memo(UserPostsList);
