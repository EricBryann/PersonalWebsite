import React from "react";
import Section from "../Section";
import PortfolioExperiencesItem from "./PortfolioExperiencesItem";

const items = [
  {
    title: "Software Engineer at JoniAI (June 2021 - August 2021)",
    description: [
      "Designed and developed server-rendered single-page application using Typescript, ReactJS, NextJS, and MongoDB.",
      "Created more than 10 different pages with working frontend and backend from scratch.",
      "Wrote end-to-end and integration tests using cypress for the pages created.",
      "Built and wrote documentations for more than 10 different reusable components.",
    ],
  },
  {
    title: "Software Engineer at GreenDay (Feb 2021 - May 2021)",
    description: [
      "Developed core features using Angular, Node, Express, and Postgresql.",
      "Liaised with the engineering team for possible app improvement.",
      "Enhanced the search feature with Algolia for a quicker and seamless searching experiences.",
      "Implemented Google Tag Manager to track users’ most frequently used features for analytic purposes.",
      "Updated daily incoming products to the database using PostgreSQL.",
    ],
  },
  {
    title: "Teaching Assistant at NUS",
    description: [
      "Conduct weekly tutorials, consultations, and code reviews.",
      "CS1010 (Programming Methodology) (July 2021 - Dec 2021)",
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
