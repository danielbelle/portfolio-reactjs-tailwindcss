import React from "react";
import Proj1 from "../Assets/project-1.png";
import Proj2 from "../Assets/project-2.png";
import Proj3 from "../Assets/project-3.gif";
import Proj4 from "../Assets/project-4.png";
import Proj5 from "../Assets/project-5.png";
import Proj6 from "../Assets/project-6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const carouselProjects = [
    {
      key: "1",
      img: `${Proj1}`,
      name: "Landing Page ReactJS",
      github: "https://github.com/danielbelle/react-js-landing-page-restaurant",
      demo: "https://react-js-landing-page-restaurant.vercel.app/",
    },
    {
      key: "2",
      img: `${Proj2}`,
      name: "Consumo de API Externa",
      github: "https://github.com/danielbelle/buscador-cep",
      demo: "https://buscador-cep-pink-pi.vercel.app/",
    },
    {
      key: "3",
      img: `${Proj6}`,
      name: "TailwindCSS ReactJS Landing Page",
      github: "https://github.com/danielbelle/financial-page-rectjs",
      demo: "https://financial-page-rectjs-tailwindcss.vercel.app/",
    },
    {
      key: "4",
      img: `${Proj4}`,
      name: "Quiz ReactJS",
      github: "https://github.com/danielbelle/quiz-reactjs",
      demo: "https://quiz-reactjs-ecru.vercel.app/",
    },
    {
      key: "5",
      img: `${Proj5}`,
      name: "Search Bar Integrado com API",
      github: "https://github.com/danielbelle/search-bar-API",
      demo: "https://search-bar-api.vercel.app/",
    },
    {
      key: "6",
      img: `${Proj3}`,
      name: "CRUD PHP, CodeIgniter e MySQL",
      github: "https://github.com/danielbelle/api-orders",
      demo: "https://www.youtube.com/watch?v=G1Brhqz-PqM",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div
      id="projects"
      className="flex justify-center flex-col max-w-[1160px] m-auto relative min-h-[400px] sm:mt-[200px] mt-[300px] md:mt-0"
    >
      <div>
        <p className="flex justify-center font-[600] text-gray-600">
          Mais Recentes
        </p>
        <h1 className="flex justify-center text-[3rem] font-[600] mb-10">
          Projetos
        </h1>
        <div className="m-auto items-center">
          <div className="mt-[1rem]">
            <Slider {...settings}>
              {carouselProjects.map((d) => (
                <div
                  key={d.key}
                  className="ml-10 sm:ml-5 min-h-[350px] inline-block max-h-[450px] min-w-[240px] max-w-[300px] bg-white "
                >
                  <div className="flex flex-col md:mr-1 lg:mr-2 border-solid border-[0.1rem] border-gray-500 rounded-[32px] rounded-t-[30px]">
                    <div className="flex items-start min-h-[290px] border-b-[0.1rem] ">
                      <img
                        src={d.img}
                        alt="Projeto"
                        className="h-[100%] w-[100%] rounded-t-[31px]"
                      />
                    </div>
                    <div className="flex flex-col bg-[#fafafa] bottom-0 rounded-b-[32px]">
                      <h2 className="font-[600] text-black text-[0.9rem] justify-center text-center my-4">
                        {d.name}
                      </h2>
                      <div className="flex content-center justify-center items-center gap-1 mb-5">
                        <a
                          href={d.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="font-[600] text-[0.8rem] ease-in duration-300 p-[0.8rem] w-[7rem] rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-[#353535] hover:text-white bg-[#FFF]">
                            Github
                          </button>
                        </a>
                        <a
                          href={d.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="font-[600] text-[0.8rem] ease-in duration-300 p-[0.8rem] w-[7rem] rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-[#353535] hover:text-white bg-[#FFF]">
                            Projeto
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
