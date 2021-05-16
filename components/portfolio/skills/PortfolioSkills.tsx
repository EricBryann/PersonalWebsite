import React from "react";

const PortfolioSkills: React.FC = () => {
  return (
    <div id="skills" className="bg-yellow-200 md:px-24 px-4 py-12">
      <div className="font-bold text-3xl mb-4">
        Skills
        <img className="w-10 h-10 inline ml-5" src="/tools.png" />
      </div>
      <div className="px-6">- C, C++, Java, Git</div>
      <div className="px-6">- HTML, CSS, Javascript</div>
      <div className="px-6">- MongoDB, Express, React, Node (MERN)</div>
      <div className="px-6">- Typescript, PostgreSQL, Angular</div>
    </div>
  );
};

export default PortfolioSkills;
