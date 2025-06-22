"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const Post = ({ signedIn, post }) => {
  console.log("Rendering Post component");

  // console.log(signedIn);

  return (
    <Card className="">
      {post && (
        <CardContent className="post p-1">
          <h1 className="heading-sm py-1">{post.title}</h1>
          <p>{post.body}</p>
        </CardContent>
      )}
    </Card>
  );
};

// const customComparator = (prevProps, nextProps) => {
//   return nextProps.post === prevProps.post;
// };

export default Post;
// export default React.memo(Post);
// export default React.memo(Post, customComparator);
