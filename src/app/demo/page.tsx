"use client";

import PostViewer from "./_components/post-viewer";
import * as React from "react";

const POSTS = [
  {
    title: "Post 1",
    content: "Content of post 1",
  },
  {
    title: "Post 2",
    content: "Content of post 2",
  },
  {
    title: "Post 3",
    content: "Content of post 3",
  },
  {
    title: "Post 4",
    content: "Content of post 4",
  },
  {
    title: "Post 5",
    content: "Content of post 5",
  },
  {
    title: "Post 6",
    content: "Content of post 6",
  },
  {
    title: "Post 7",
    content: "Content of post 7",
  },
  {
    title: "Post 8",
    content: "Content of post 8",
  },
  {
    title: "Post 9",
    content: "Content of post 9",
  },
  {
    title: "Post 10",
    content: "Content of post 10",
  },
];

export default function DemoPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-400 text-white p-2 rounded-bl-lg rounded-br-lg">
        Demo Page
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-6">
        {POSTS.map((post, index) => (
          <PostViewer key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
}
