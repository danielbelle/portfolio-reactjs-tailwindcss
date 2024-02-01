import React from 'react'
import Experience from '../Assets/experience.png'
import Education from '../Assets/education.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'
import './Styles/About.css'

function About() {

  return (
    <div id="about" className='about-section'>
      <div>
        <Link to='nav' spy={true} smooth={true} offset={0} duration={300}>
          <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
        </Link>
        <div className='text-box'>
          <p className="about-text-p1">Conheça Mais</p>
          <h1 className="title">Sobre mim</h1>
          <div className="about-container">
            <div className="about-details-container">
              <div className="text-container">
                <p>
                  Entusiasta obcecado por desenvolvimento web. Profissional dedicado ao desenvolvimento de soluções que possam proporcionar momentos inesquecíveis aos usuários.
                </p>
                <p>
                  Atuei como desenvolvedor Full Stack JavaScript e PHP por 1 ano e também desenvolvo sites freelancer.
                </p>
                <p>
                  Neste caminho já dei muito DELETE no PostgreSQL sem utilizar WHERE (triste haha), comecei muitos projetos nomeando variáveis em português e terminei em inglês, dei muitos commits no GitHub sem debugar e fazer testes (vergonha) e ganhei o premio do usuário que mais pesquisou mensagens de erro StackOverflow ao invés de ler a documentação oficial (risos).
                </p>
                <p>
                  E nas horas vagas gosto de ler livros de Ficção Científica.
                </p>
              </div>
              <div className="details-history-containers">
                <div className='inline'>
                  <div className="details-container">
                    <img src={Experience} alt="Ícone de experiência" className="icon" />
                    <h3>Duarte's Digital Soluctions</h3>
                    <p>1+ anos <br />Web Developer</p>
                  </div>
                  <div className="details-container">
                    <img src={Experience} alt="Ícone de experiência" className="icon" />
                    <h3>Pieta.tech</h3>
                    <p>1+ anos <br />Front-end ReactJS</p>
                  </div>
                </div>
                <div className='inline'>
                  <div className="details-container">
                    <img src={Experience} alt="Ícone de experiência" className="icon" />
                    <h3>ControlWare</h3>
                    <p>1+ anos <br />Desenvolvimento Full Stack PHP e JS</p>
                  </div>
                  <div className="details-container">
                    <img src={Education} alt="Ícone de educação" className="icon" />
                    <h3>Engenharia Elétrica</h3>
                    <p>Universidade Federal de Santa Catarina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to='projects' spy={true} smooth={true} offset={0} duration={300}>
          <img src={Arrow} alt="Ícone seta" className="icon arrow" />
        </Link>
      </div>
    </div>
  )
}

export default About