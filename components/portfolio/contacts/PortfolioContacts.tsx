import React from "react";
import Link from "next/link";
import Section from "../Section";
import SocialMedia from "./SocialMedia";

const PortfolioContacts: React.FC = () => {
  return (
    <Section
      id="contacts"
      bgColor="bg-gray-400"
      title="Contacts"
      imageSrc="/letter.png"
    >
      <div className="px-6 md:flex">
        <div className="md:w-1/2">
          <SocialMedia
            imageSrc="/phone.png"
            content="+6585916922"
          ></SocialMedia>
          <SocialMedia
            imageSrc="/gmail.png"
            content="eric.bryan2001@gmail.com"
          ></SocialMedia>
        </div>
        <div className="md:w-1/2">
          <SocialMedia
            imageSrc="/github.png"
            content={
              <span className="font-bold">
                <Link href="https://github.com/EricBryann">
                  <a target="_blank">Github</a>
                </Link>
              </span>
            }
          ></SocialMedia>
          <SocialMedia
            imageSrc="/linkedin.png"
            content={
              <span className="font-bold">
                <Link href="https://www.linkedin.com/in/eric-bryan-19b0591b4/">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </span>
            }
          ></SocialMedia>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioContacts;
