import React from "react";

const PortfolioSkills: React.FC = () => {
  return (
    <div id="skills" className="px-4 py-12 bg-yellow-200 md:px-24">
      <div className="mb-4 text-3xl font-bold">
        Skills
        <img className="inline w-10 h-10 ml-5" src="/tools.png" />
      </div>
      <div className="px-6">- C, C++, Java, Git</div>
      <div className="px-6">- HTML, CSS, Javascript, Typescript</div>
      <div className="px-6">- MongoDB, Express, React, Node (MERN)</div>
      <div className="px-6">- PostgreSQL</div>
    </div>
  );
};

export default PortfolioSkills;
