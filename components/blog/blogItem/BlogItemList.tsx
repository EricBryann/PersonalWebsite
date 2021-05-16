import React from "react";
import BlogItem from "./BlogItem";

interface BlogItemListInterface {
  items: {
    _id: string
    title: string;
    content: string;
  }[];
}

const BlogItemList: React.FC<BlogItemListInterface> = ({items}) => {
  return (
    <div className="bg-yellow-100 p-4 flex flex-col justify-center items-center">
      {items.map((item) => (
        <BlogItem key={item._id} id={item._id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default BlogItemList;
