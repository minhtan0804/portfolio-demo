import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiBriefcase, FiDownload } from "react-icons/fi";
import styles from "./style.module.css";

const Developer = () => {
  const info = [
    {
      icon: <LuMail color="#12F7D6" />,
      text: "minhtan290902@gmail.com",
    },
    {
      icon: <GrLocation color="#12F7D6" />,
      text: "Hà Tĩnh",
    },
    {
      icon: <FiBriefcase color="#12F7D6" />,
      text: "Full-time",
    },
  ];

  const contents = [
    {
      number: 1,
      text: "Years of Experience",
    },
    {
      number: 2,
      text: "Programming Languages",
    },
    {
      number: 3,
      text: "Development Tools",
    },
  ];

  return (
    <div
      id=""
      className="m-32 max-md:m-16 mt-16 flex flex-col gap-16 text-white"
    >
      <h1 className="capitalize text-[#98FAEC] self-center text-8xl ubuntu">
        Developer
      </h1>
      <div className="flex justify-between gap-32 max-xl:gap-16 max-xl:flex-col items-center">
        <div className={styles.information}>
          <div className="flex flex-col items-center">
            <div className="border-[3px] border-[#12F7D6] rounded-full w-24 aspect-square mb-4"></div>
            <div className="text-3xl font-medium">Trần Minh Tân</div>
            <div className="text-[14px]">Front-end Developer</div>
          </div>

          <div className="flex flex-col gap-4">
            {info.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="text-3xl">{item.icon}</div>
                <div className="text-2xl">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="flex px-8 py-4 gap-4 rounded-[2rem] bg-white w-fit items-center">
            <span className="text-xl text-[#292F36]">Download CV</span>
            <FiDownload color="#292F36" size={24} />
          </div>
        </div>

        <div className="flex gap-2 items-center max-md:flex-col max-md:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col text-[4rem] font-medium">
              <h1>Hey</h1>
              <div className="flex gap-3">
                <h1>I'm</h1>
                <h1 className="text-[#12F7D6]">Tân,</h1>
              </div>
              <h1>Font-end Developer</h1>
            </div>

            <span className="w-[90%]">
              I help business grow by crafting amazing web experiences. If
              you’re looking for a developer that likes to get stuff done,
            </span>

            <div className="flex gap-4 text-[#12F7D6] text-3xl font-medium">
              Let’s talk
              <div className="rounded-full p-2 bg-[#43454D]">
                <LuMail color="#12F7D6" size={32} />
              </div>
            </div>
          </div>

          <div className="px-8 py-12 flex flex-col gap-12 bg-[#1A1E23] rounded-[80px]">
            {contents.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-5xl font-medium text-[#12F7D6]">
                  {item.number}
                </span>
                <span className="capitalize">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
