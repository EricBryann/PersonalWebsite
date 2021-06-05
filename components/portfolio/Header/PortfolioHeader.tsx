import React from "react";
import NavBar from "../../shared/NavBar";
import Button from "../../shared/Button";

const PortfolioHeader: React.FC = () => {
  return (
    <header className="relative">
      <div className="flex bg-blue-200 md:px-8 sm:px-0">
        <div>
          <NavBar url="/blog" text="My Blog" hasArrow={true}></NavBar>
        </div>
        <div className="absolute right-0 flex invisible px-4 md:visible">
          <NavBar
            url="#experiences"
            text="Experiences"
            hasArrow={false}
          ></NavBar>
          <NavBar url="#projects" text="Projects" hasArrow={false}></NavBar>
          <NavBar url="#skills" text="Skills" hasArrow={false}></NavBar>
          <NavBar url="#contacts" text="Contacts" hasArrow={false}></NavBar>
        </div>
      </div>
      <div className="bg-blue-100 border-b-4 border-pink-500 md:px-24 sm:px-6">
        <div className="flex justify-center mb-4 bottom-4">
          <img
            className="absolute invisible h-20 sm:visible left-20 top-40"
            src="/cloud.png"
          />
          <img
            className="absolute invisible h-16 sm:visible right-20 top-20"
            src="/cloud.png"
          />
        </div>
        <div className="p-4 text-center ">
          <div className="flex justify-center mb-4 bottom-4">
            <img
              className="border-4 border-pink-500 rounded-full w-80 h-80"
              src="/mypic.jpg"
            />
          </div>
          <div className="mb-10 text-6xl font-bold text-blue-700 hover:text-yellow-400">
            Eric Bryan
          </div>
          <div className="mb-12 text-2xl text-blue-400">
            Hi! I am Eric Bryan, currently a year 1 Computer Engineering student
            at the National Univerity of Singapore (NUS). I love tech and would
            love to change the world through tech :)
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold">Phone: 85916922</div>
            <div className="font-bold">Email : eric.bryan2001@gmail.com</div>
          </div>
          <div className="flex items-center justify-center">
            <Button text="Github" url="https://github.com/EricBryann"></Button>
            <Button
              text="LinkedIn"
              url="https://www.linkedin.com/in/eric-bryan-19b0591b4/"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
