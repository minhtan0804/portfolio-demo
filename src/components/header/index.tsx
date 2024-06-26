import { TPath, TSocial } from "@/types";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const logo = "<C />";
  return (
    <a href="/">
      <div className="text-white flex items-center gap-4 text-2xl">
        <h1 className="text-[#12F7D6]">{logo}</h1>
        MinhTan
      </div>
    </a>
  );
};

const Header = ({ socials }: { socials: TSocial[] }) => {
  const location = useLocation();
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    setPathname(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paths: TPath[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Blog",
      to: "/blog",
    },
  ];

  return (
    <div className="px-8 py-6 max-md:px-0 max-sm:py-0 max-sm:px-6 max-md:mx-8 flex items-center justify-between mx-32 border-b-[1px] border-[#43454D]">
      <Logo />

      <div className="flex gap-16 items-center">
        <div className="flex gap-8">
          {paths &&
            paths.map((path) => (
              <Link
                key={path.name}
                to={path.to}
                className={`text-white cursor-pointer hover:text-[#12F7D6] transition-colors ${path.to === pathname && "active"}`}
                onClick={() => setPathname(path.to)}
              >
                {path.name}
              </Link>
            ))}
        </div>

        <div className="w-40 max-xl:w-24 max-md:w-fit rounded-full bg-white text-black flex flex-row-reverse px-2 py-1 max-md:p-0 max-md:bg-transparent max-md:text-white">
          <MdOutlineSearch size={20} />
        </div>

        <div className="flex gap-8 max-sm:hidden">
          {socials &&
            socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="">
                {social.icon}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
