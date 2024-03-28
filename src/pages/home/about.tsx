import Title from "@/components/title";
import styles from "./style.module.css";

import image from "@/assets/image_1.png";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#1A1E23] p-32 max-md:p-16 flex flex-col gap-32 text-white"
    >
      <Title />

      <div className="flex gap-32 pl-32 pr-16 max-xl:flex-col max-xl:items-center max-md:p-0 max-md:gap-16">
        <div className="flex flex-col gap-16">
          <div className={styles.about}>About Me</div>
          <div className="bg-[#292F36] py-6 px-10 flex flex-col gap-4 rounded-[2.5rem]">
            <span className="font-medium text-3xl text-[#12F7D6]">Hello!</span>{" "}
            <span>
              My name is Sinan and I specialize in web developement that
              utilizes
              <span className="text-[#12F7D6]">HTML</span>,{" "}
              <span className="text-[#12F7D6]">CSS</span>,{" "}
              <span className="text-[#12F7D6]">JS</span>, and{" "}
              <span className="text-[#12F7D6]">REACT</span> etc.
            </span>
            <span>
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works.
            </span>{" "}
            <span>
              {" "}
              Striving to never stop learning and improving. When I'm not
              coding, I am <span className="text-[#12F7D6]">writing bolgs</span>
              , reading, or picking up some new hands-on art project like{" "}
              <span className="text-[#12F7D6]">photography</span>.
            </span>{" "}
            I like to have my perspective and belief systems challenged so that
            I see the world through new eyes.
          </div>
        </div>

        <img src={image} className="" />
      </div>
    </div>
  );
};

export default About;
