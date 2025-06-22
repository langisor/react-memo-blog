"use client";
import React, { useEffect, useMemo, useState } from "react";
import fetchUpdatedPosts from "@/fetch/fetchUpdatedPosts";
import allPosts from "@/data/allPosts.json";
import sortPosts from "./utils";
import LatestPost from "./LatestPost";
import UserPostsIndex from "./UserPostsIndex";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const Blog = ({ signedIn }) => {
  const [updatedPosts, setUpdatedPosts] = useState(allPosts);
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const getLatestPosts = () => {
    const posts = fetchUpdatedPosts();
    setUpdatedPosts(posts);
  };

  const sortedPosts = sortPosts(updatedPosts);
  // const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);

  useEffect(() => {
    const id = setInterval(
      () => setLocalTime(new Date().toLocaleTimeString()),
      3000
    );
    return () => clearInterval(id);
  }, []);

  console.log("Rendering Blog component");

  return (
    <Card className="container">
      <CardTitle className="m-1 p-1 text-center heading-lg">
        Memoization in React
      </CardTitle>
      <CardContent className="m-1 p-2 ">
        <div className="my-1 p-2 box">
          <div className="latest-posts-top">
            <h3 className="heading-md my-1 p-1">Latest posts</h3>
            <div className="p-1">{localTime}</div>
          </div>
          <div className="my-1">
            <Button onClick={getLatestPosts}>
              Get&nbsp;Latest&nbsp;Post
            </Button>
          </div>
          <hr className="hr my-2" />
          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />
        </div>
        <UserPostsIndex signedIn={signedIn} />
      </CardContent>
    </Card>
  );
};

/*
React.memo() is a Higher Order Component (HOC) that memoizes the passed in component along with the value of its props. 
*/
export default Blog;
// export default React.memo(Blog);
