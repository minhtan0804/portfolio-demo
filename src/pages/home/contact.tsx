import Title from "@/components/title";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-32 py-24 max-md:p-8 flex flex-col items-center bg-[#43454D] text-white"
    >
      <Title description={"I’m currently available for work"}>Contact</Title>

      <div className="flex flex-col items-center gap-16 mt-32 w-2/3 max-md:mt-16 max-md:w-3/4">
        <div className="border-2 rounded-tl-[2rem] rounded-br-[2rem] border-[#12F7D6] px-10 py-4 text-[2rem] text-[#12F7D6]">
          Send me a message
        </div>

        <div className="flex flex-col gap-16 ubuntu w-full">
          <div className="grid grid-cols-2 gap-32">
            <div className="flex flex-col items-start gap-6">
              <label htmlFor="#name" className="text-[#12F7D6]">
                Your name *
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b-[1px] border-[#98FAEC] w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-6">
              <label htmlFor="#name" className="text-[#12F7D6]">
                Your email *
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-b-[1px] border-[#98FAEC] w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <label htmlFor="#name" className="text-[#12F7D6]">
              Your message *
            </label>
            <input
              type="text"
              placeholder="Enter your needs"
              className="bg-transparent border-b-[1px] border-[#98FAEC] w-full"
            />
          </div>
        </div>

        <button className="bg-[#12F7D6] w-fit rounded-full text-black flex gap-4 items-center ubuntu">
          Send Message
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
