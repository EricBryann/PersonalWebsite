import React from "react";

interface PortfolioExperiencesItemInterface {
  title: string;
  description: string[];
}

const PortfolioExperiencesItem: React.FC<PortfolioExperiencesItemInterface> = ({
  title,
  description,
}) => {
  return (
      <div className="px-6 pb-5 mb-5 border-b-2">
        <div className="font-bold mb-3 text-xl">{title}</div>
        <div>
          <ul>
            {description.map((item, id) => (
              <li key={id}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default PortfolioExperiencesItem;
