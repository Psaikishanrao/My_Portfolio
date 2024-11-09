import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Intro() {
  const [typeEffectS] = useTypewriter({
    words: [
      "I am a Full Stack Developer in Java (Beginner)",
      "I am Certified in MERN stack",
      "I have solved over 300+ coding challenges on HackerRank, Codeforces, and LeetCode with highest ratings on Codeforces (852) and LeetCode (1512)",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed:20,
    deleteSpeed:30,
  });

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 px-4 sm:px-2">
      <h1 className="text-white text-3xl sm:text-2xl">Hi, I am</h1>
      <h1 className="text-5xl sm:text-3xl text-secondary font-semibold py-5">
        Pragda Sai Kishan Rao
      </h1>
      <h1 className="text-4xl sm:text-2xl text-white font-semibold">
        I build things for the web.
      </h1>
      <p className="text-green-400 text-2xl sm:text-lg w-3/4 sm:w-full h-20 sm:h-15">
        <span>{typeEffectS}</span>
        <Cursor />
      </p>
      <div className="pt-5 sm:pt-3">
        <button className="border-2 border-tertiary text-tertiary px-8 sm:px-3 py-2 sm:py-1 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
