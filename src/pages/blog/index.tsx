import Article from "@/components/article";
import Title from "@/components/title";

const Blog = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <Title
        description={
          "My thoughts on technology and business, welcome to subscribe"
        }
      >
        Blogs
      </Title>

      <button className="border-[#12F7D6] border-[1px] rounded-full text-white">
        Subscribe My Blogs
      </button>

      <div className="flex flex-col items-center text-white">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Article key={index} numberOfBorder={1} />
          ))}
      </div>
    </div>
  );
};

export default Blog;
