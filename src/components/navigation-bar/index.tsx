import { useEffect, useState } from "react";
import { FiEdit, FiGrid, FiUser } from "react-icons/fi";
import { IoCodeSlash, IoMailOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [hash, setHash] = useState<string>("#");

  useEffect(() => {
    setHash(location.hash ?? "#");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    {
      hash: "#",
      icon: <FiGrid size={24} />,
    },
    {
      hash: "#about",
      icon: <FiUser size={24} />,
    },
    {
      hash: "#skills",
      icon: <IoCodeSlash size={24} />,
    },
    {
      hash: "#blogs",
      icon: <FiEdit size={24} />,
    },
    {
      hash: "#contact",
      icon: <IoMailOutline size={24} />,
    },
  ];

  return (
    <div className="fixed top-20 left-4 w-fit py-2 px-3 flex flex-col gap-6 rounded-full border-[1px] bg-[#292F36]">
      {items.map((item) => (
        <a
          key={item.hash}
          href={`${item.hash}`}
          onClick={() => setHash(item.hash)}
          className={`p-2 rounded-full text-white ${(hash === item.hash || (hash === "" && item.hash === "#")) && "bg-white !text-black"} cursor-pointer`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
