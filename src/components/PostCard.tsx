"use client";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ posts }: any) => {
  // console.log(posts);
  return (
    <>
      {/* Whole Container  */}
      <div className="flex flex-col gap-5 mb-10 mt-5">
        {/* Image & Date container */}
        <div className="flex">
          {/* Image Div */}
          <div className="w-[90%] h-[400px] relative">
            <Image
              src="/palis.png"
              alt="Codding"
              fill
              className=" object-cover"
            />
          </div>

          {/* Date */}
          <span className="w-[10%] rotate-[270deg] text-xs m-auto">
            04.02.2024
          </span>
        </div>

        {/* Text Div */}
        <div>
          {/* Title */}
          <h1 className="text-[24px] font-medium w-[90%] mb-5">
            {posts.title}
          </h1>

          {/* Description  */}
          <p className="w-[90%] font-[300px] text-gray-500 mb-3 ">
            {posts.body}
          </p>

          {/* ReadMore Link */}
          <Link href={`/blog/${posts.id}`} className="underline ">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
