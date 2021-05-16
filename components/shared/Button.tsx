import Link from "next/link";
import React from "react";

interface Button {
  text: string;
  url: string;
}
const Button: React.FC<Button> = ({ text, url }) => {
  return (
    <button className="m-4 rounded-lg border-4 border-blue-800 w-40 p-2 font-bold bg-pink-100 hover:bg-blue-300">
      <Link href={url}>
        <a target="_blank">{text}</a>
      </Link>
    </button>
  );
};

export default Button;
