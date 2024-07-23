import React from "react";
import foodmunch from "../assets/portfolio/foodmunch.png";
import todos from "../assets/portfolio/todos.png";
import nxttrends from "../assets/portfolio/nxttrends.png";

import weatherapp from "../assets/portfolio/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodmunch,
      demo: "https://kannanfoodmunch.ccbp.tech/",
    },
    {
      id: 2,
      src: todos,
      demo: "https://kannantodosapp.ccbp.tech//",
    },
    {
      id: 3,
      src: nxttrends,
      demo: "https://fullonenxt.ccbp.tech/",
    },
    {
      id: 4,
      src: weatherapp,
      demo: "https://main--weather-app-react-kannan.netlify.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
