import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/Experiences";
function Experiences() {
    const[selectedItemIndex,setSelectedItemIndex]=useState(0);
  return (
    <div>
      <SectionTitle title="Expericne" />
      <div className="flex gap-20 py-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2  border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
            {experiences.map((exp,index)=>(
                <div onClick={()=>{
                    setSelectedItemIndex(index);
                }} className="cursor-pointer">
                    
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a1b] py-3" : "text-white"}`}>

                        {exp.period}
                    </h1>
                </div>
            ))}
        </div>

        <div className="flex flex-col gap-5 ">
            <h1 className="text-secondary text-xl sm:text-base">
                {experiences[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-xl sm:text-base">
                {experiences[selectedItemIndex].company}
            </h1>
            <h1 className="text-white text-xl sm:text-base">
                {experiences[selectedItemIndex].description}
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
