"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const UserPost = ({ post }) => {
  // console.log('Rendering UserPost component')

  return (
    <Card className="my-1 flex flex-col w-full">
      <CardContent className="p-2 ">
        <a href={`#${post.title}`} className="">
          <h4 id={post.title} className="px-2 font-sm font-bold">
            {post.title}
          </h4>
        </a>
      </CardContent>
    </Card>
  );
};

export default UserPost;
