import React from "react";
import Link from "next/link";

interface PortfolioItem {
  imageUrl: string;
  url: string;
  title: string;
  description: string;
}

const PortfolioProjectsItem: React.FC<PortfolioItem> = ({
  imageUrl,
  url,
  title,
  description,
}) => {
  return (
    <div className="pb-5 pt-5">
      <div className="border-b-2 border-pink-50 flex justify-content item-center px-6 pb-3">
        <div className="w-1/3 mr-6">
          <img height="40" src={imageUrl} />
        </div>
        <div className="w-2/3">
          <div className="font-bold mb-3 hover:text-yellow-500 text-2xl">
            {url != "" ?
              <Link href={url}>
                <a target="_blank">{title}</a>
              </Link> : <div>{title}</div>
            }
          </div>
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectsItem;
