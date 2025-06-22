"use client";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Card, CardContent } from "@/components/ui/card";
const LatestPost = ({ signedIn, post }) => {
  const [likesCount, setLikesCount] = useState(null);

  // change likesCount every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setLikesCount((likesCount) => likesCount + 1);
    }, 3000);

    return () => {
      clearInterval(id);
      console.log("Clearing interval for likesCount");
    };
  }, []);

  console.log("Rendering LatestPost component");

  return (
    <Card className="my-2 mx-2 p-2 border border-rounded">
      {post ? (
        <>
          <Post signedIn={signedIn} post={post} />
          {likesCount && (
            <CardContent className="my-1 p-1">
              <span>{likesCount}</span>&nbsp;<span>Likes</span>
            </CardContent>
          )}
        </>
      ) : (
        <p>Click on Get Latest Post button</p>
      )}
    </Card>
  );
};

export default LatestPost;
