import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Styles/Footer.css'

function Footer() {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])

  return (
    <div id="footer" className='relative h-[26vh] min-h-[26vh] mx-auto my-[1rem] items-center justify-between max-w-[1160px] pt-[5rem] mb-[5rem]'>
      <div className="nav-links-container">
        <ul className='flex mt-4 lg:text-2xl text-md text-nowrap md:mr-5 m-auto items-center justify-center'>
          <li className='p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer'>
            <Link to='nav' spy={true} smooth={true} offset={0} duration={300}>
              Vamos Para Cima?
            </Link>
          </li>
          <li className='p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer'>
            <Link to='about' spy={true} smooth={true} offset={0} duration={300}>
              Saiba +
            </Link>
          </li>
          <li className='p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer'>
            <Link to='projects' spy={true} smooth={true} offset={0} duration={300}>
              Projetos
            </Link>
          </li>
          <li className='p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer'>
            <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
              Bora Conversar?
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center footer-text justify-center text-[#656565] mt-2'>
        <p>Copyright &#169; {date} Daniel Henrique Bellé. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

export default Footer