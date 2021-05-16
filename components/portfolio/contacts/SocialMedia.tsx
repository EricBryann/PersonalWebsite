import React from "react";

interface SocialMediaInterface {
  imageSrc: string;
  content: string | JSX.Element;
}

const SocialMedia: React.FC<SocialMediaInterface> = ({ imageSrc, content }) => {
  return (
    <div className="mb-2">
      <img className="w-6 h-6 inline" src={imageSrc} />
      <span className="pl-3">{content}</span>
    </div>
  );
};

export default SocialMedia;
