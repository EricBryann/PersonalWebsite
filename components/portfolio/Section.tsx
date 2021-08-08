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
      <div id={id} className="px-4 py-12 md:px-24">
        <div className="mb-4 text-3xl font-bold">
          {title}
          <img className="inline w-10 h-10 ml-5" src={imageSrc} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
