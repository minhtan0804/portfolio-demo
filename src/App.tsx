import Footer from "@/components/footer";
import Header from "@/components/header";
import { TSocial } from "@/types";
import { Suspense } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function App() {
  const socials: TSocial[] = [
    {
      icon: <FaGithub size={20} color="#12F7D6" />,
      href: "https://githug.com/minhtan0804",
    },
    {
      icon: <FaTwitter size={20} color="#12F7D6" />,
      href: "1",
    },
    {
      icon: <FaLinkedin size={20} color="#12F7D6" />,
      href: "2",
    },
  ];

  return (
    <section className="min-h-screen bg-[#292F36] root">
      <header>
        <Header socials={socials} />
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer socials={socials} />
      </footer>
    </section>
  );
}

export default App;
