import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Lottie from "lottie-react";
import Contact1 from '../../assets/Contact.json';
import Contact2 from '../../assets/Contact2.json';
function Contact() {
  const user = {
    name: "Pragda Saikishan Rao",
    age: "23",
    gender: "male",
    email: "saikishanrao768@gmail.com",
    mobile: "7681082741",
    country: "INDIA",
    occupation: "Silicon University, Bhubneswar",
  };

  return (
    <div>
      <SectionTitle title="Say Hello" id={"contact"}/>
      <div className="flex sm:flex-col items-center justify-between gap-10">
        <div className="flex flex-col gap-1 w-1/2 sm:w-full">
          <p className="text-tertiary sm:text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p key={key} className="ml-5  sm:text-sm">
              <span className="text-tertiary"> {key}: </span>
              <span className="text-tertiary"> {user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary sm:text-sm">{"}"}</p>
        </div>
        
        <div className="w-1/2  flex justify-center sm:h-[200px] h-[400px] sm:w-[250px]">
          <Lottie
            animationData={Contact1}
            autoplay
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
