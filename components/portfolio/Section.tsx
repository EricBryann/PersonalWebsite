import React, { Children } from "react";

interface SectionInterface {
  id: string;
  title: string;
  imageSrc: string;
  children: any;
  bgColor: string;
}

const Section: React.FC<SectionInterface> = ({
  id,
  title,
  imageSrc,
  children,
  bgColor,
}) => {
  return (
    <div className={bgColor}>
      <div id={id} className="md:px-24 px-4 py-12">
        <div className="font-bold text-3xl mb-4">
          {title}
          <img className="w-10 h-10 inline ml-5" src={imageSrc} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
