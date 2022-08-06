import React from "react";
import PortfolioProjectsItem from "./PortfolioProjectsItem";
import Section from "../Section";

const items = [
  {
    imageUrl: "/cloudJumpers.png",
    url: "https://github.com/EricBryann/CloudJumpers",
    title: "Cloud Jumpers",
    description:
      "(Swift) An online multiplayer platformer game. Developed an event-based Game Engine, similar to Flux architecture. Awarded 1st place (Champion) for NUS 20th STePs.",
  },
  {
    imageUrl: "/peggle.png",
    url: "https://youtu.be/M4gTYZ1Ozps",
    title: "Peggle Clone",
    description:
      "(Swift, SQL) A Peggle game clone. Wrote Physics Engine and Game Engine from scratch.",
  },
  {
    imageUrl: "/pathfinding.png",
    url: "https://pathfinding-visualizer-nine.vercel.app/",
    title: "Pathfinding Visualizer",
    description:
      "(React) An interactive gamified pathfinding visualizer built for my CS2040C (Data Structures and Algorithms) class.",
  },
  {
    imageUrl: "/sorting.png",
    url: "https://sorting-visualizer-sigma.vercel.app/",
    title: "Sorting Visualizer",
    description:
      "(React) An interactive sorting visualizer built for my CS1010 (Programming Methodology) class.",
  },
  {
    imageUrl: "/socialMedia.png",
    url: "https://share-it.vercel.app/",
    title: "Social media app",
    description:
      "(MongoDB, Express, React, NodeJS) An instagram-like social media application.",
  },
];
const PortfolioProjects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      imageSrc="/smartphone.png"
      bgColor="bg-yellow-100"
    >
      {items.map((item, id) => (
        <PortfolioProjectsItem
          key={id}
          imageUrl={item.imageUrl}
          url={item.url}
          title={item.title}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default PortfolioProjects;
