import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white" name="contact">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bpjmpwmb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />

            <input
              className="my-4 p-2 bg-transparent border-2 text-white focus:outline-none"
              type="text"
              name="email"
              placeholder="Enter your name"
            />
            <textarea placeholder="Enter your message" name="message" cols="30" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-30">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
