import React from "react";
import NavBar from "../../shared/NavBar";
import Button from "../../shared/Button";

const PortfolioHeader: React.FC = () => {
  return (
    <header className="relative">
      <div className=" flex bg-blue-200 md:px-8 sm:px-0">
        <div>
          <NavBar url="/blog" text="My Blog" hasArrow={true}></NavBar>
        </div>
        <div className="absolute right-0 flex px-4">
          <NavBar url="#experiences" text="Experiences" hasArrow={false}></NavBar>
          <NavBar url="#projects" text="Projects" hasArrow={false}></NavBar>
          <NavBar url="#skills" text="Skills" hasArrow={false}></NavBar>
          <NavBar url="#contacts" text="Contacts" hasArrow={false}></NavBar>
        </div>
      </div>
      <div className="bg-blue-100 border-b-4 border-pink-500 md:px-24 sm:px-6">
        <div className="flex justify-center bottom-4 mb-4">
          <img className="absolute left-20 top-40 h-24" src="/cloud.png" />
          <img className="absolute right-20 top-20 h-16" src="/cloud.png" />
        </div>
        <div className="text-center p-4 ">
          <div className="flex justify-center bottom-4 mb-4">
            <img
              className="w-80 h-80 rounded-full border-4 border-pink-500"
              src="/mypic.jpg"
            />
          </div>
          <div className="font-bold text-blue-700 text-6xl mb-10 hover:text-yellow-400">
            Eric Bryan
          </div>
          <div className="text-blue-400 text-2xl mb-12">
            Hi! I am Eric Bryan, currently a year 2 Computer Engineering student
            at the National Univerity of Singapore (NUS)
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">Phone: 85916922</div>
            <div className="font-bold">Email : eric.bryan2001@gmail.com</div>
          </div>
          <div className="flex justify-center items-center">
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
