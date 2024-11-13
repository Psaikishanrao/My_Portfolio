import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import SectionTitle from "../../components/SectionTitle";
import Lottie from "lottie-react";
import Mongo from "../../assets/Mongo.json";
import Javascript from "../../assets/Javascript.json";
import Mysql from "../../assets/Mysql.json";
import Firebase from "../../assets/Firebase.json";
import Reacts from "../../assets/React.json";
import Java from "../../assets/Java.json";
import { Environment } from "@react-three/drei";



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

function Model() {
  const gltf = useGLTF("dress1.glb");
  const { animations } = gltf;
  const { actions } = useAnimations(animations, gltf.scene);

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={gltf.scene} scale={1.4} />;
}

function About() {
  return (
    <div>
      <SectionTitle title="About Me" id={"about"} />

      <div className="flex flex-row sm:flex-col w-full pt-10 items-center sm:gap-5">
        <div className="sm:w-1/2 w-full max-h-[80vh]  sm:max-h-[70vh] flex justify-center sm:justify-start ">
          <div className="w-full h-[900px] sm:h-[700px]">
            
            <Canvas className="w-full h-full">
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <OrbitControls enableZoom={false} />
              <Model />
              <Environment preset="sunset" />
            </Canvas>
 
            
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-full px-4 sm:px-0 sm:text-left sm:text-sm">
          <p className="text-white">
            I'm Pragda Sai Kishan Rao, a passionate software developer with a
            focus on web technologies and full-stack development. Through
            hands-on experience in various languages, frameworks, and databases,
            I've built user-centric solutions that prioritize efficiency and
            user experience.  </p>

            <p className="text-white"> My coding journey includes solving over 200
            challenges on platforms like HackerRank, Codeforces, and LeetCode,
            enhancing my problem-solving skills in both competitive and
            project-based environments.</p>

        
          <p className="text-white">
            In addition to technical skills, I've engaged in hackathons and
            internships that have enriched my industry knowledge. I enjoy
            working on diverse projects and am motivated by a desire to innovate and collaborate
            with teams that value creativity and growth.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl mb-3">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="grid grid-cols-6 sm:grid-cols-3  gap-5 sm:gap-5 mt-5 justify-center sm:justify-start">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 p-3 ">
              {skill.lottieSrc ? (
                <Lottie
                  animationData={skill.lottieSrc}
                  loop
                  autoplay
                    className="w-28 h-28 sm:w-16 sm:h-16 transform scale-110"
                />
              ) : skill.mp4 ? (
                <video
                  src={skill.mp4}
                  autoPlay
                  loop
                  muted
                        className="w-24 h-24 sm:w-16 sm:h-16 transform rounded-2xl scale-110"
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

// export default About;
// import React, { useState, useEffect } from "react";
// import SectionTitle from "../../components/SectionTitle";
// import Lottie from "lottie-react";

// const About = () => {
//   const [aboutData, setAboutData] = useState(null);

//   const fetchJsonAnimation = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch Lottie JSON from ${url}`);
//     }
//     return await response.json();
//   };

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/about");
//         const data = await response.json();
//         if (data.developer?.mediaType === "json") {
//           data.developer.animationData = await fetchJsonAnimation(data.developer.media);
//         }
//         for (const skill of data.skills) {
//           if (skill.mediaType === "json") {
//             skill.animationData = await fetchJsonAnimation(skill.media);
//           }
//         }
//         setAboutData(data);
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   if (!aboutData) {
//     return <div>Loading...</div>;
//   }

//   const { description1, description2, developer, skills } = aboutData;

//   return (
//     <div>
//       <SectionTitle title="About Me" />

//       <div className="flex flex-row sm:flex-col w-full items-center sm:gap-5">
//         <div className="sm:w-1/2 w-full max-h-[70vh] sm:max-h-[80vh] flex justify-center sm:justify-start">
//           {developer?.animationData && developer.mediaType === "json" && (
//             <Lottie
//               animationData={developer.animationData}
//               loop
//               autoplay
//               className="w-full sm:w-auto max-w-[500px]"
//             />
//           )}
//         </div>

//         <div className="flex flex-col gap-5 w-full sm:w-full px-4 sm:px-0 sm:text-left">
//           <p className="text-white">{description1}</p>
//           <p className="text-white">{description2}</p>
//         </div>
//       </div>

//       <div className="py-5">
//         <h1 className="text-tertiary text-xl mb-3">
//           Here are a few technologies I've been working with recently:
//         </h1>
//         <div className="flex flex-wrap gap-5 sm:gap-10 mt-5 justify-center sm:justify-start">
//           {skills.map((skill, index) => (
//             <div key={index} className="flex flex-col items-center gap-2 p-3">
//               {skill.mediaType === "json" && skill.animationData ? (
//                 <Lottie
//                   animationData={skill.animationData}
//                   loop
//                   autoplay
//                   style={{ width: 100, height: 100, transform: "scale(1.2)" }}
//                 />
//               ) : skill.mediaType === "mp4" ? (
//                 <video
//                   src={skill.media}
//                   autoPlay
//                   loop
//                   muted
//                   style={{ width: 100, height: 100, borderRadius: "30px" }}
//                 />
//               ) : null}
//               <h1 className="text-tertiary">{skill.name}</h1>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
