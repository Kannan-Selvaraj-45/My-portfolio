import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
        Hello! I'm Kannan Selvaraj, a passionate and aspiring web developer with a keen interest in building and designing web applications. I am pursing Bachelor's degree in with a degree in Coimbatore institute of engineering and technology with the specialization of Computer science and Engineering, where I gained a solid foundation in programming and software development.During my studies, I developed a strong enthusiasm for web development and have been honing my skills in technologies like React, Tailwind CSS, Express.js, and MongoDB. I enjoy creating intuitive, responsive, and dynamic web applications that provide great user experiences.
        </p>
        <br />
        <p className="text-xl">
        I am eager to continue learning and growing as a web developer. My goal is to contribute to exciting projects and work with a team of talented professionals to build impactful web applications.Feel free to explore my portfolio and check out my projects. I am always open to feedback and collaboration opportunities. Let's connect!
        </p>
      </div>
    </div>
  );
};

export default About;
