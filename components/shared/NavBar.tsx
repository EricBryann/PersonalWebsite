import React from "react";
import Link from "next/link";

interface Nav {
  text: string;
  url: string;
  hasArrow: boolean;
}

const NavBar: React.FC<Nav> = ({ text, url, hasArrow }) => {
  return (
    <div className="text-white font-bold p-1 md:p-3 md:text-2xl sm:text hover:text-green-400 flex">
      {hasArrow && 
      <Link href={url}>
        <img className="mr-4 text-green-200 inline cursor-default" width={30} src="/arrow.png"/>
      </Link>}
      <Link href={url}>
          {text}
      </Link>
    </div>
  );
};

export default NavBar;
