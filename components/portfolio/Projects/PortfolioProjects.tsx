import React from "react";
import PortfolioProjectsItem from "./PortfolioProjectsItem";
import Section from "../Section";

const items = [
  {
    imageUrl: "/socialMedia.png",
    githubUrl: "https://github.com/EricBryann/MERN-Application",
    title: "Social media app",
    description:
      "Simulating Instagram app, a user can signup/login and post pictures with descriptions for other users to see",
  },
  {
    imageUrl: "/TodoList.png",
    githubUrl: "https://github.com/EricBryann/ToDoList",
    title: "To Do List app",
    description: "A user can post/delete notes.",
  },
  {
    imageUrl: "/Diary.png",
    githubUrl: "https://github.com/EricBryann/Diary-Application",
    title: "Diary app",
    description: "A User can add, update, delete diary posts.",
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
      <div className="text-red-700 pl-6 mb-6">Click on the title to go to the github repository</div>
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
