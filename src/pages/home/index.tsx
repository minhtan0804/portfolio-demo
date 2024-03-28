import NavBar from "@/components/navigation-bar";
import About from "@/pages/home/about";
import Blog from "@/pages/home/blog";
import Contact from "@/pages/home/contact";
import Developer from "@/pages/home/developer";
import Skills from "@/pages/home/skills";

const Home = () => {
  return (
    <div className="relative">
      <NavBar />
      <Developer />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
