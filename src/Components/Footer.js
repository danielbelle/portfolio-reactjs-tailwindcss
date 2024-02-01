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
    <footer id="footer">
      <nav className='footer-nav'>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><Link to='nav' spy={true} smooth={true} offset={0} duration={300}>Vamos Para Cima?</Link></li>
            <li><Link to='about' spy={true} smooth={true} offset={0} duration={300}>Saiba +</Link></li>
            <li><Link to='projects' spy={true} smooth={true} offset={0} duration={300}>Projetos</Link></li>
            {/*<li><Link to='experience' spy={true} smooth={true} offset={0} duration={300}>Jobs</Link></li>*/}
            <li><Link to='contact' spy={true} smooth={true} offset={0} duration={300}>Bora Conversar?</Link></li>
          </ul>
        </div>
      </nav>
      <div className='footer-text'>
        <p>Copyright &#169; {date} Daniel Henrique Bellé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer