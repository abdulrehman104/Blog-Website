import Image from "next/image";
import About from "../../../public/about.png";
const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-[80px]">
      <div className="flex flex-col gap-y-8  md:w-1/2 ">
        <h3 className="text-lg text-[var(--btn)]">About Agency</h3>
        <h1 className="text-2xl md:text-6xl  font-medium">
          We create digital ideas.
        </h1>
        <p className="text-[12px] md:text-[16px]">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex  items-center justify-between ">
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-xl md:text-3xl  text-[var(--btn)] font-medium">
              10 K+
            </h1>
            <p className="text-[12px] md:text-[16px]">Year of experience</p>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-xl md:text-3xl  text-[var(--btn)] font-medium">
              234 K+
            </h1>
            <p className="text-[12px] md:text-[16px]">People Reached</p>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="text-xl md:text-3xl  text-[var(--btn)] font-medium">
              5 K+
            </h1>
            <p className="text-[12px] md:text-[16px]">services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative  ">
        <Image
          src={About}
          alt="About"
          className="w-[1000px] md:w-[700px] h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Page;
