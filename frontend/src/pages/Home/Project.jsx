import React, { useState } from "react";
import Slider from "react-slick";
import { projects } from "../../resources/projects";
import SectionTitle from "../../components/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <SectionTitle title="Projects" id={"project"} />
      <div className="flex gap-10 py-10 sm:flex-col">
        <div className="flex sm:flex-row flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:w-full sm:overflow-x-auto">
          {projects.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a1b] py-3"
                    : "text-white"
                }`}
              >
                {exp.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex  gap-10 w-full items-center justify-center sm:flex-col">
          <div className="w-full max-w-md h-64 ">
            <Slider {...sliderSettings}>
              {projects[selectedItemIndex].image.map((imgSrc, i) => (
                <div key={i}>
                  <img src={imgSrc} alt="" className="w-100 h-60 rounded-lg" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col gap-5  w-full sm:text-left">
            <h1 className="text-secondary text-lg sm:text-base">
              {projects[selectedItemIndex].Technologies.map((elem, index) => (
                <span key={index}>{elem}, </span>
              ))}
            </h1>
            <h1 className="text-tertiary text-lg sm:text-base">
              {projects[selectedItemIndex].description}
            </h1>
            {/* <a href={projects[selectedItemIndex].link} className="text-lime-500 text-lg  cursor-pointer sm:text-base">
                            {projects[selectedItemIndex].link}
                        </a> */}
            <button
              onClick={() =>
                window.open(projects[selectedItemIndex].link, "_blank")
              }
              className="bg-cyan-900 hover:bg-green-700 text-white font-semibold text-lg  py-2 px-4 w-3/4 sm:w-1/3
              rounded-lg cursor-pointer sm:text-base shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
