import React from "react";

const BlogHeader: React.FC = () => {
  return (
    <div className="relative bg-yellow-200 flex flex-col justify-center items-center">
      <div className="font-bold text-6xl text-yellow-700 my-10 flex">
        <div className="mr-5">Welcome to my Blog</div>
        <img width={80} src="/study.png"></img>
      </div>
      <div className="text-2xl text-yellow-500 pb-12">
        Where I post some of my thoughts
      </div>
    </div>
  );
};

export default BlogHeader;
