import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Lottie from "lottie-react";
import Mongo from "../../assets/Mongo.json";
import Javascript from "../../assets/Javascript.json";
import Mysql from "../../assets/Mysql.json";
import Firebase from "../../assets/Firebase.json";
import Reacts from "../../assets/React.json";
import Java from "../../assets/Java.json";
import Developer2 from "../../assets/Developer2.json";

const skills = [
  { name: "JavaScript", lottieSrc: Javascript },
  { name: "Java", lottieSrc: Java },
  { name: "React", lottieSrc: Reacts },
  { name: "Node", mp4: "Node.mp4" },
  { name: "MySql", lottieSrc: Mysql },
  { name: "Firebase", lottieSrc: Firebase },
  { name: "MongoDb", lottieSrc: Mongo },
  { name: "Java Jakarta Servlets", mp4: "Servlet.mp4" },
  { name: "Jsp", mp4: "JSP.mp4" },
];

function About() {
  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex  flex-row sm:flex-col w-full items-center  sm:gap-5">
        <div className="sm:w-1/2 w-full max-h-[70vh] sm:max-h-[80vh] flex justify-center sm:justify-start">
          <Lottie animationData={Developer2} loop autoplay className="w-full sm:w-auto max-w-[500px]" />
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-full px-4 sm:px-0  sm:text-left">
          <p className="text-white">
            I'm Pragda Sai Kishan Rao, a passionate software developer with a focus on web technologies and full-stack
            development. Through hands-on experience in various languages, frameworks, and databases, I've built
            user-centric solutions that prioritize efficiency and user experience. My coding journey includes solving
            over 200 challenges on platforms like HackerRank, Codeforces, and LeetCode, enhancing my problem-solving
            skills in both competitive and project-based environments.
          </p>
          <p className="text-white">
            In addition to technical skills, I've engaged in hackathons and internships that have enriched my industry
            knowledge. I enjoy working on diverse projects, from Assessment Portal to e-commerce platforms, and am
            motivated by a desire to innovate and collaborate with teams that value creativity and growth.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl mb-3">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 sm:gap-10 mt-5 justify-center sm:justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-3"
            >
              {skill.lottieSrc ? (
                <Lottie
                  animationData={skill.lottieSrc}
                  loop
                  autoplay
                  style={{ width: 100, height: 100, transform: "scale(1.2)" }}
                />
              ) : skill.mp4 ? (
                <video
                  src={skill.mp4}
                  autoPlay
                  loop
                  muted
                  style={{ width: 100, height: 100, borderRadius: "30px" }}
                />
              ) : null}
              <h1 className="text-tertiary">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
