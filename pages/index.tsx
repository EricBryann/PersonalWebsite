import PortfolioProjects from "../components/portfolio/Projects/PortfolioProjects";
import PortfolioHeader from "../components/portfolio/Header/PortfolioHeader";
import PortfolioExperiences from "../components/portfolio/Experiences/PortfolioExperiences";
import PortfolioContacts from "../components/portfolio/contacts/PortfolioContacts";
import PortfolioSkills from "../components/portfolio/skills/PortfolioSkills";
import React from "react";

const portfolio = () => {
  return (
    <>
      <PortfolioHeader />
      <PortfolioExperiences />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioContacts />
    </>
  );
};

export default portfolio;
