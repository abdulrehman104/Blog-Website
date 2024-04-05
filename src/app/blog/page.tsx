"use client";

import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const n = 6;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        const filterData = data.filter((_: any, index: number) => index < n);
        console.log(filterData);
        setPosts(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-[20px]">
        {/* use map loop for show blog in a page */}
        {posts.map((post: Post) => (
          <div className="w-[100%] md:w-[45%] lg:w-[30%]" key={post.id}>
            <PostCard posts={post} />
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogPage;
