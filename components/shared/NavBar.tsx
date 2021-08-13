import React from "react";
import Link from "next/link";

interface Nav {
  text: string;
  url: string;
  hasArrow: boolean;
}

const NavBar: React.FC<Nav> = ({ text, url, hasArrow }) => {
  return (
    <div className="flex p-1 font-bold text-white md:p-3 md:text-2xl sm:text hover:text-green-400">
      {hasArrow && (
        <Link href={url}>
          <img
            className="inline mr-4 text-green-200 cursor-default"
            width={30}
            src="/arrow.png"
          />
        </Link>
      )}
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavBar;
