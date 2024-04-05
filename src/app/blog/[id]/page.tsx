"use client";
import UserId from "@/components/UserId";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";

const SinglePostPage = ({ params }: any) => {
  const [posts, setPosts] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
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
  }, [params.id]); // Add params.id as a dependency

  return (
    <>
      {/* add responsevness in future  */}
      {/* main div  */}
      <div className="flex gap-[100px]">
        {/* left div  */}
        <Image
          src="/chai.png"
          alt="Post"
          width={500}
          height={500}
          className="object-cover hidden md:block md:w-1/2"
        />
        {/* right div */}
        <div className="flex flex-col gap-y-8">
          <h1 className="text-4xl font-bold">{posts.title}</h1>
          <div className="flex gap-x-10 ">
            <Image
              src="/user.png"
              alt="User"
              width={50}
              height={50}
              className=" object-cover rounded-full"
            />
            <Suspense fallback={<div>Loading....</div>}>
              <UserId userId={posts.id} />
            </Suspense>
            <div className="flex flex-col ">
              <span className="text-gray-500 font-bold">Publish</span>
              <span className="">04/02/2024</span>
            </div>
          </div>
          <div className="text-[18px] text-gray-300">{posts.body}</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
