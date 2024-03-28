import { FiEdit, FiGrid, FiUser } from "react-icons/fi";
import { IoCodeSlash, IoMailOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="sticky top-20 left-4 w-fit py-2 px-3 flex flex-col gap-6 rounded-full border-[1px]">
      <a href="#" className="p-2 rounded-full bg-white cursor-pointer">
        <FiGrid size={24} />
      </a>
      <a href="#about" className="p-2 rounded-full bg-white cursor-pointer">
        <FiUser size={24} />
      </a>
      <a href="#skills" className="p-2 rounded-full bg-white cursor-pointer">
        <IoCodeSlash size={24} />
      </a>
      <a href="#blogs" className="p-2 rounded-full bg-white cursor-pointer">
        <FiEdit size={24} />
      </a>
      <a href="#contact" className="p-2 rounded-full bg-white cursor-pointer">
        <IoMailOutline size={24} />
      </a>
    </div>
  );
};

export default NavBar;
