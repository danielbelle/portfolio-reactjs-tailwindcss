import React from 'react'
import Checkmark from '../Assets/checkmark.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'

function Experiences() {
  return (
    <section id="experience">
      <Link to='projects' spy={true} smooth={true} offset={0} duration={300}>
        <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
      </Link>
      <p className="section__text__p1">Saiba com o que</p>
      <h1 className="title">Trabalhei</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Front-end Dev</h2>
            <div className="article-container">
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>HTML5</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>CSS3</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Básico</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Back-end Dev</h2>
            <div className="article-container">
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>PHP</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>ReactJS</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Trabalhei com</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Node.js</h3>
                  <p>Básico</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
        <img src={Arrow} alt="Ícone seta" className="icon arrow" />
      </Link>
    </section>
  )
}

export default Experiences