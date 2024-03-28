import Article from "@/components/article";
import Title from "@/components/title";

const Blog = () => {
  return (
    <div
      id="blogs"
      className="p-32 flex flex-col items-center gap-16 bg-[#1A1E23] text-white"
    >
      <Title
        description={
          "My thoughts on technology and business, welcome to subscribe"
        }
      >
        Blogs
      </Title>

      <Article />

      <div className="flex gap-8">
        <button className="bg-[#12F7D6] rounded-full text-black">
          View More
        </button>
        <button className="border-[#12F7D6] border-[1px] rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Blog;
