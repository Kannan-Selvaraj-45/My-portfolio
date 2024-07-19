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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          omnis debitis cumque quisquam ducimus ab vitae impedit repellendus,
          odio, tempore repellat at iure distinctio officiis fugiat asperiores?
          Minus nemo assumenda asperiores mollitia blanditiis minima labore et,
          quia ab a illum ad tempore, velit obcaecati quos saepe numquam, sit
          dolores quisquam!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          quam, ratione eaque qui ea suscipit incidunt aperiam perferendis
          cumque eos provident est! Quisquam officia sint soluta natus nihil
          consequuntur aut ea non reiciendis cum, dicta quidem nesciunt nemo
          consectetur cumque optio, quia impedit animi veritatis accusantium
          aliquid vero magni. Quae.
        </p>
      </div>
    </div>
  );
};

export default About;
