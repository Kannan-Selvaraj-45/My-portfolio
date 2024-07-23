import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/kannan1.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      name="home"
    >
      <div className=" text-white max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a passionate web developer eager to start my career in building
            and designing web applications. I enjoy working with technologies
            like React, Tailwind CSS, Express.js, and MongoDB.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-200"
            alt="myProfile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
