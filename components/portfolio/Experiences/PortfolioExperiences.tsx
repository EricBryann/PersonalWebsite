import React from "react";
import Section from "../Section";
import PortfolioExperiencesItem from "./PortfolioExperiencesItem";

const items = [
  {
    title: "Software Engineer at JoniAI (June 2021 - August 2021)",
    description: [
      "Designed and Developed core features using Typescript, ReactJS, NextJS, and MongoDB.",
    ],
  },
  {
    title: "Software Engineer at GreenDay (Feb 2021 - May 2021)",
    description: [
      "Developed core features using Angular, Node, Express, and Postgresql",
      "Enhancing the search feature with Algolia for a quicker search and to ignore typo, improving users’ searching experiences.",
      "Implemented Google Tag Manager to track users’ most frequently used features for analytic purposes.",
      "Updating daily incoming products to the database using PostgreSQL.",
      "Fixing bugs and issues for frontend and backend using Angular and NodeJS",
    ],
  },
];
const PortfolioExperiences: React.FC = () => {
  return (
    <Section
      id="experiences"
      bgColor="bg-gray-100"
      title="Work Experiences"
      imageSrc="/work.png"
    >
      {items.map((item, id) => (
        <PortfolioExperiencesItem
          key={id}
          title={item.title}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default PortfolioExperiences;
