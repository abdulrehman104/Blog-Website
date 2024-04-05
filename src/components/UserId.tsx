"use client";
import { useEffect, useState } from "react";

const UserId = ({ userId }: any) => {
  const [posts, setPosts] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPosts(data); // Update the posts state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]); // Add params.id as a dependency

  return (
    <div className="flex flex-col ">
      <span className="text-gray-500 font-bold">Author</span>
      <span className="">{posts.name}</span>
    </div>
  );
};

export default UserId;
