import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div
      id="footer"
      className="flex justify-between items-center max-w-[1160px] relative min-h-[26vh] m-auto pt-[5rem] mb-[5rem] flex-col"
    >
      <ul className="flex mt-4 lg:text-2xl md:text-lg text-[0.78rem] text-nowrap m-auto items-center justify-center ">
        <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
          <Link to="nav" spy={true} smooth={true} offset={0} duration={300}>
            Vamos Para Cima?
          </Link>
        </li>
        <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
            Saiba +
          </Link>
        </li>
        <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
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
      </ul>
      <div className="flex items-center text-center justify-center text-[#656565] mt-2 mx-4 text-[8px] sm:text-[14px] text-xs">
        <p>
          Copyright &#169; {date} Daniel Henrique Bellé. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
