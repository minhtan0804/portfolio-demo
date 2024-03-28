import Title from "@/components/title";
import { FaDisplay } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

const Skills = () => {
  return (
    <div id="skills" className="p-32 flex flex-col items-center">
      <Title description={"I am striving to never stop learning and improving"}>
        Skills
      </Title>

      <div className="mt-16 flex gap-32">
        <div className="flex flex-1 rounded-lg overflow-hidden">
          <div className="w-2 bg-[#0C73B8]"></div>
          <div className="flex py-4 px-6 flex-col items-center bg-[#98FAEC]">
            <FaDisplay size={32} />
            <span className="text-2xl">web developement</span>
            <span>HTML·CSS·JS·REACT</span>
          </div>
        </div>
        <div className="flex flex-1  rounded-lg overflow-hidden">
          <div className="w-2 bg-[#0C73B8]"></div>
          <div className="flex py-4 px-6 flex-col items-center bg-[#98FAEC]">
            <FiSmartphone size={32} />
            <span className="text-2xl">App developement</span>
            <span>iOS·Android</span>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-x-32">
        <div className="flex flex-col gap-6 items-center text-[#E54F26] text-[2rem] font-medium">
          <div className="p-10 rounded-full bg-[#E54F26]">
            <IoLogoHtml5 color="#FFFFFF" />
          </div>
          HTML
        </div>

        <div className="flex flex-col gap-6 items-center text-[#0C73B8] text-[2rem] font-medium">
          <div className="p-10 rounded-full bg-[#0C73B8]">
            <IoLogoCss3 color="#FFFFFF" />
          </div>
          CSS
        </div>

        <div className="flex flex-col gap-6 items-center text-[#E7A020] text-[2rem] font-medium">
          <div className="p-10 rounded-full bg-[#E7A020]">
            <IoLogoJavascript color="#FFFFFF" />
          </div>
          JS
        </div>

        <div className="flex flex-col gap-6 items-center text-[#28A9E0] text-[2rem] font-medium">
          <div className="p-10 rounded-full bg-[#28A9E0]">
            <IoLogoReact color="#FFFFFF" />
          </div>
          REACT
        </div>
      </div>
    </div>
  );
};

export default Skills;
