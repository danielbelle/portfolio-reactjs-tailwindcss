import React from 'react'
import Proj1 from '../Assets/project-1.png'
import Proj2 from '../Assets/project-2.png'
import Proj3 from '../Assets/project-3.gif'
import Proj4 from '../Assets/project-4.png'
import Proj5 from '../Assets/project-5.png'
import Proj6 from '../Assets/project-6.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'
import './Styles/Projects.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Projects() {

  const carouselProjects = [
    {
      key: '1',
      img: `${Proj1}`,
      name: 'Landing Page ReactJS',
      github: "https://github.com/danielbelle/react-js-landing-page-restaurant",
      demo: "https://react-js-landing-page-restaurant.vercel.app/"
    },
    {
      key: '2',
      img: `${Proj2}`,
      name: "Consumo de API Externa",
      github: "https://github.com/danielbelle/buscador-cep",
      demo: "https://buscador-cep-pink-pi.vercel.app/"
    },
    {
      key: '3',
      img: `${Proj6}`,
      name: "tailwindCSS ReacJS Landing Page",
      github: "https://github.com/danielbelle/financial-page-rectjs",
      demo: "https://financial-page-rectjs-tailwindcss.vercel.app/"
    },
    {
      key: '4',
      img: `${Proj4}`,
      name: "Quiz ReactJS",
      github: "https://github.com/danielbelle/quiz-reactjs",
      demo: "https://quiz-reactjs-ecru.vercel.app/"
    },
    {
      key: '5',
      img: `${Proj5}`,
      name: "Search Bar Integrado com API",
      github: "https://github.com/danielbelle/search-bar-API",
      demo: "https://search-bar-api.vercel.app/"
    },
    {
      key: '6',
      img: `${Proj3}`,
      name: "CRUD Pedidos PHP, com 3 Endpoints CodeIgniter e MySQL",
      github: "https://github.com/danielbelle/api-orders",
      demo: "https://www.youtube.com/watch?v=G1Brhqz-PqM"
    }
  ];


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div id="projects" className='projects-section'>
      <Link to='about' spy={true} smooth={true} offset={0} duration={300}>
        <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
      </Link>
      <div className='content-box'>
        <p className="project-text-p1">Mais Recentes</p>
        <h1 className="project-up-title">Projetos</h1>
        <div className="experience-details-container-project">
          <div className="project-containers">
            <Slider {...settings}>
              {carouselProjects.map((d) => (
                <div key={d.key} className="details-container-project">
                  <div className="article-container">
                    <img src={d.img} alt="Projeto 1" className="project-img" />
                  </div>
                  <h2 className="experience-sub-title">{d.name}</h2>
                  <div className="btn-container">
                    <a href={d.github} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-color-2 project-btn">
                        Github
                      </button>
                    </a>
                    <a href={d.demo} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-color-2 project-btn">
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
        <img src={Arrow} alt="Ícone seta" className="icon arrow" />
      </Link>
    </div >
  )
}

export default Projects