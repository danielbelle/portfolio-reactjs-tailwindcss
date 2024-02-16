import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1160px] mx-auto px-4 text-black"
      id="nav"
    >
      <h1 className="w-full lg:text-4xl sm:text-2xl text-1xl text-black m-12 mt-15 p-4 pt-6 text-nowrap">
        Daniel Henrique Bellé
      </h1>
      <ul className="hidden md:flex mt-4 lg:text-2xl text-md  text-nowrap md:mr-5 m-auto ">
        <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
            Saiba +
          </Link>
        </li>
        <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            Projetos
          </Link>
        </li>
        <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={300}>
            Bora Conversar?
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#fafafa] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl text-black text-nowrap m-4">
          Daniel Bellé
        </h1>
        <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
          <li onClick={handleNav}  className="p-4 border-b border-gray-300 cursor-pointer">
            Saiba +
          </li>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={300}>
          <li onClick={handleNav}  className="p-4 border-b border-gray-300 cursor-pointer">
            Projetos
          </li>
        </Link>
        <Link onClick={handleNav}  to="contact" spy={true} smooth={true} offset={0} duration={300}>
          <li className="p-4 border-b border-gray-300 cursor-pointer">
            Bora Conversar?
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
