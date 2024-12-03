import {
  BiLogoGithub,
  BiLogoGoogle,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import image from "/my-pic-rounded.jpg";
import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center  ">
        <img
          src={image}
          alt="profile-pic"
          className="w-[250px] sm:w-[300px] rounded-full"
        />
        <div className="space-y-1 sm:space-y-3">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Suresh Madhushanka
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-2xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            Software Engineer
          </h3>

          <p className="max-w-[600px] text-sm text-gray-500">
            Describe a project you've worked on that you consider your best
            work. Walk us through the architecture, approach, and key decisions
            that made it stand out.
          </p>
        </div>
        <div className="flex gap-3 ">
          <BiLogoGithub className=" w-10 h-10 rounded-full cursor-pointer border-2 border-transparent  bg-teal-600 p-2  text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12 " />
          <BiLogoLinkedin className="w-10 h-10 border-2 p-2 cursor-pointer rounded-full text-white  border-transparent transition-all duration-200   hover:scale-110 hover:bg-white bg-teal-600 hover:border-teal-600 hover:text-teal-600 md:w-12 md:h-12" />
          <BiLogoGoogle className="w-10 h-10 border-2 p-2 border-transparent rounded-full cursor-pointer bg-teal-600  text-white transition-all duration-200 md:w-12 md:h-12 hover:border-teal-600 hover:bg-white hover:text-teal-600 hover:scale-110" />
          <BiLogoYoutube
            className="w-10 h-10 bg-teal-600 border-2 rounded-full border-transparent cursor-pointer
           text-white p-2 transition-all duration-200  md:w-12 md:h-12 hover:text-teal-600 hover:bg-white hover:border-teal-600 hover:scale-110"
          />
          <BiLogoTwitter className="w-10 h-10 text-white bg-teal-600 border-2  border-transparent cursor-pointer rounded-full transition-all duration-200 p-2 hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:scale-110 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
