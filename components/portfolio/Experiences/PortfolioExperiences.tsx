import React from "react";
import Section from "../Section";
import PortfolioExperiencesItem from "./PortfolioExperiencesItem";

const items = [
  {
    company: "Shopee",
    title: "Software Engineer Intern (May 2022 - August 2022)",
    description: [
      "Automated failed dependency APIs detections using Jaeger and Kafka, reducing the overall services downtime by 80%, measured by weekly services performance report.",
      "Built a chat bot using websocket to investigate the root cause of a failed HTTP request by scraping Shopee's log platform, currently being used by over 40 engineers at Shopee."
    ],
  },
  {
    company: "Joni.AI",
    title: "Software Engineer Intern (June 2021 - August 2021)",
    description: [
      "Developed a full stack web application for clients."
    ],
  },
  {
    company: "GreenDay",
    title: "Software Engineer Intern (Feb 2021 - May 2021)",
    description: [
      "Integrated Google Tag Manager to track features usage frequency",
      "Integrated Algolia to the search feature, increasing the search bar usage by 200% as measured by Google Tag Manager."
    ],
  },
  {
    company: "NUS",
    title: "Teaching Assistant",
    description: [
      "CS2040C (Data Structures and Algorithms) (Jan 2022 - May 2022)",
      "CS1010 (Programming Methodology) (July 2021 - Dec 2021)"
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
          company = {item.company}
          title={item.title}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default PortfolioExperiences;
