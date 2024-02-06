import React from 'react'
import Experience from '../Assets/experience.png'
import Education from '../Assets/education.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'
import './Styles/About.css'

function About() {

  return (
    <div id="about" className='justify-between items-center max-w-[1160px] mx-auto my-auto relative min-h-[400px] h-[80vh] pt-[50px]pb-[50px]'>
      <div>{/*
        <Link to='nav' spy={true} smooth={true} offset={0} duration={300}>
          <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
        </Link> */}
        <div>
          <p className="flex justify-center font-[600] text-gray-600">Conheça Mais</p>
          <h1 className="flex text-[3rem] font-[800] mb-2 justify-center ">Sobre mim</h1>
          <div className="about-container">
            <div className="about-details-container">
              <div className='text-gray-600'>
                <p className="text-justify m-[20px]">
                  Entusiasta obcecado por desenvolvimento web. Profissional dedicado ao desenvolvimento de soluções que possam proporcionar momentos inesquecíveis aos usuários.
                </p>
                <p className="text-justify m-[20px]">
                  Atuei como desenvolvedor Full Stack JavaScript e PHP por 1 ano e também desenvolvo sites freelancer.
                </p>
                <p className="text-justify m-[20px]">
                  Neste caminho já dei muito DELETE no PostgreSQL sem utilizar WHERE (triste haha), comecei muitos projetos nomeando variáveis em português e terminei em inglês, dei muitos commits no GitHub sem debugar e fazer testes (vergonha) e ganhei o premio do usuário que mais pesquisou mensagens de erro StackOverflow ao invés de ler a documentação oficial (risos).
                </p>
                <p className="text-justify m-[20px]">
                  E nas horas vagas gosto de ler livros de Ficção Científica.
                </p>
              </div>
              <div className="flex gap-[2rem] mb-[2rem] mt-[2rem]">
                <div className='contents text-center'>
                  <div className="p-[1.5rem] flex-1 bg-white rounded-[32px] border-solid border-[0.1rem] border-[#a3a3a3]">
                    <img src={Experience} alt="Ícone de experiência" className="h-[2rem] mx-auto my-2" />
                    <h3 className='font-bold'>Duarte's Digital Soluctions</h3>
                    <p className='text-gray-600'>1+ anos <br />Web Developer</p>
                  </div>
                  <div className="p-[1.5rem] flex-1 bg-white rounded-[32px] border-solid border-[0.1rem] border-[#a3a3a3] max-w-[350px]">
                    <img src={Experience} alt="Ícone de experiência" className="h-[2rem] mx-auto my-2" />
                    <h3 className='font-bold'>Pieta.tech</h3>
                    <p className='text-gray-600'>1+ anos <br />Front-end ReactJS</p>
                  </div>
                </div>
                <div className='contents text-center'>
                  <div className="p-[1.5rem] flex-1 bg-white rounded-[32px] border-solid border-[0.1rem] border-[#a3a3a3] m-auto">
                    <img src={Experience} alt="Ícone de experiência" className="h-[2rem] mx-auto my-2" />
                    <h3 className='font-bold'>ControlWare</h3>
                    <p className='text-gray-600'>1+ anos <br />Desenvolvimento Full Stack PHP e JS</p>
                  </div>
                  <div className="p-[1.5rem] flex-1 bg-white rounded-[32px] border-solid border-[0.1rem] border-[#a3a3a3]">
                    <img src={Education} alt="Ícone de educação" className="h-[2rem] mx-auto my-2" />
                    <h3 className='font-bold'>Engenharia Elétrica</h3>
                    <p className='text-gray-600'>Universidade Federal de Santa Catarina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/*
        <Link to='projects' spy={true} smooth={true} offset={0} duration={300}>
          <img src={Arrow} alt="Ícone seta" className="icon arrow" />
        </Link> */}
      </div>
    </div>
  )
}

export default About