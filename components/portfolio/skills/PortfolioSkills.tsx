import React from "react";
import { FaReact, FaGitAlt, FaAngular, FaNodeJs } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";

const PortfolioSkills: React.FC = () => {
  return (
    <div id="skills" className="px-4 py-12 bg-yellow-200 md:px-24">
      <div className="mb-6 text-3xl font-bold">
        Skills
        <img className="inline w-10 h-10 ml-5" src="/tools.png" />
      </div>

      <div>
        <div className="mb-2 ml-2 text-lg font-bold">
          I am not that bad with:{" "}
        </div>
        <div className="ml-6 lg:flex">
          <div className="flex flex-col items-center mr-6 text-blue-400">
            <FaReact size={60} />
            <div>React</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-blue-800">
            <SiCplusplus size={60} />
            <div>C++</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-yellow-600">
            <AiFillHtml5 size={60} />
            <div>HTML</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-blue-500">
            <DiCss3 size={60} />
            <div>CSS</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-yellow-400">
            <SiJavascript size={60} />
            <div>Javascript</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-blue-600">
            <SiTypescript size={60} />
            <div>Typescript</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-red-600">
            <FaGitAlt size={60} />
            <div>Git</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-green-600">
            <DiMongodb size={60} />
            <div>MongoDB</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2 ml-2 text-lg font-bold">I have dealt with: </div>
        <div className="ml-6 lg:flex">
          <div className="flex flex-col items-center mr-6 text-red-400">
            <FaAngular size={60} />
            <div>Angular</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-green-500">
            <FaNodeJs size={60} />
            <div>Node</div>
          </div>
          <div className="flex flex-col items-center mr-6 text-blue-500">
            <SiPostgresql size={60} />
            <div>PostgeSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkills;
