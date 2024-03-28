import image from "@/assets/image_2.png";
import styles from "./style.module.css";

const Article = ({ numberOfBorder }: { numberOfBorder?: number }) => {
  return (
    <div
      className={`w-fit ${numberOfBorder ? "border-t-[1px]" : "border-y-[1px]"} border-white py-16 px-4 flex items-center gap-16 ${styles.ubuntu}`}
    >
      <img src={image} alt="" />
      <div className="flex flex-col gap-6">
        <h2 className="text-[2rem] text-[#12F7D6]">
          What does it take to become a web developer?
        </h2>
        <span className="max-w-[750px]">
          Web development, also known as website development, encompasses a
          variety of tasks and processes involved in creating websites for the
          internet…
        </span>
        <span className="text-[2rem] text-[#12F7D6]">Read more &rarr;</span>

        <div className="grid grid-cols-4 gap-x-6">
          <div className="rounded-full px-2 py-1 bg-[#43454D]">
            Web Developer
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Text</span>
            Minh Tan
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Date</span>
            27.Mar 2024
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Read</span>5 min
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
