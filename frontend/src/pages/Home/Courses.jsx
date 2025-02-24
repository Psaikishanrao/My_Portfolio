import React, { useState } from "react";
import { courses } from "../../resources/courses";
import SectionTitle from "../../components/SectionTitle";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Courses" id={"courses"} />
      <div className="flex gap-10 py-10 sm:flex-col">
        <div className="flex sm:flex-row flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:w-full sm:overflow-x-auto">
          {courses.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg px-5 sm:px-2 sm:text-base ${
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

        <div className="flex px-10  sm:px-5 sm:gap-5 gap-10 w-full items-center sm:flex-col-reverse">
          <div className="flex flex-col gap-5  w-3/4  sm:text-left">
            <h1 className="text-orange-400 text-lg sm:text-base ">
              {courses[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-lg sm:text-base">
              {courses[selectedItemIndex].description}
            </h1>
            <button
              onClick={() =>
                window.open(courses[selectedItemIndex].link, "_blank")
              }
              className="bg-cyan-900 hover:bg-green-700 text-white font-semibold text-lg  py-2 px-4 w-2/3 sm:w-1/2
              rounded-lg cursor-pointer sm:text-base shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Verify
            </button>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-[30vh] w-72 sm:w-auto sm:h-[28vh] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
