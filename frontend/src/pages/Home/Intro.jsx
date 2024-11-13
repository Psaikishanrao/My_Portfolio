import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SectionTitle from "../../components/SectionTitle";

function Intro() {
  const [typeEffectS] = useTypewriter({
    // description
    words: [
      "I am a Full Stack Developer in Java (Beginner)",
      "I am Certified in MERN stack",
      "I have solved over 300+ coding challenges on HackerRank, Codeforces, and LeetCode with highest ratings on Codeforces (852) and LeetCode (1512)",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 20,
    deleteSpeed: 30,
  });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); 
  };

  return (
    <>
      <SectionTitle title="" id={"intro"} />
      <div className="h-[80vh] sm:h-[70vh] bg-primary rounded flex flex-col items-start justify-center gap-8 sm:gap-4 py-10 sm:py-2 px-4 sm:px-2">
        <h1 className="text-white text-3xl sm:text-2xl">Hi, I am</h1>
        {/* welcome text*/}
        <h1 className="text-5xl sm:text-3xl text-secondary font-semibold py-5">
          Pragda Sai Kishan Rao
        </h1>
        <h1 className="text-4xl sm:text-2xl text-white font-semibold">
          {/* caption*/}I build things for the web.
        </h1>
        <p className="text-green-400 text-2xl sm:text-base w-3/4 sm:w-full h-20 sm:h-0 ">
          <span>{typeEffectS}</span>
          <Cursor />
        </p>
        <div className="pt-5  sm:hidden sm:pt-0 ">
          <button
            onClick={() => scrollToSection("about")}
            className="border-2 border-tertiary text-tertiary px-8 sm:px-3 py-3 sm:py-1 rounded
         "
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;
