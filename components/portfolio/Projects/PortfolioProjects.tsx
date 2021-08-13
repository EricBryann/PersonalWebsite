import React from "react";
import PortfolioProjectsItem from "./PortfolioProjectsItem";
import Section from "../Section";

const items = [
  {
    imageUrl: "/pathfinding.png",
    githubUrl: "https://github.com/EricBryann/pathfinding_visualizer",
    title: "Pathfinding Visualizer",
    description:
      "This is a pathfinding visualizer I built after my data structures and algorithm course in NUS. A user can drag a starting and ending points, adding some walls/obstacles, and visualize the path without going through the walls / obstacles",
  },
  {
    imageUrl: "/socialMedia.png",
    githubUrl: "https://github.com/EricBryann/MERN-Application",
    title: "Social media app",
    description:
      "Simulating Instagram app, a user can signup/login and post pictures with descriptions for other users to see",
  },
  // {
  //   imageUrl: "/TodoList.png",
  //   githubUrl: "https://github.com/EricBryann/ToDoList",
  //   title: "Note keeper app",
  //   description: "A user can post/delete small notes to serve as reminders.",
  // },
  {
    imageUrl: "/Diary.png",
    githubUrl: "https://github.com/EricBryann/Diary-Application",
    title: "Diary app",
    description:
      "A User can add, update, delete diary posts, documenting their daily activities.",
  },
  {
    imageUrl: "/Simon.png",
    githubUrl: "https://github.com/EricBryann/SimonGame",
    title: "Simon Game",
    description: "A simple game that I made to train your memory!.",
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
          githubUrl={item.githubUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default PortfolioProjects;
