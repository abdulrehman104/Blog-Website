import Image from "next/image";
import contact from "../../../public/about.png";

const Page = () => {

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center gap-[100px] ">
        {/* Image Div */}
        <div className=" flex-1 relative">
          <Image
            src={contact}
            alt="Contact"
            className="w-[1000px] md:w-[700px] h-[500px] object-contain"
          />
        </div>

        {/* Contact Form Div */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="Name and Surname"
              className="input"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="input"
            />
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              className="input"
            />
            <textarea
              cols={20}
              rows={8}
              placeholder="Enter Your Message Here"
              className="input"
            ></textarea>
            <button className="p-[20px] bg-[var(--btn)] text-[var(--text)] font-bold rounded-md border-none cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
