"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ item }: any) => {
  const PathName = usePathname();
  console.log(PathName);
  return (
    <>
      {/* For my navbar active link  */}
      <Link
        href={item.path}
        className={`'min-w-[100px] px-4 py-2 rounded-full font-medium items-center' ${
          PathName === item.path && "activeLink"
        }`}
      >
        {item.title}
      </Link>
    </>
  );
};

export default ActiveLink;
