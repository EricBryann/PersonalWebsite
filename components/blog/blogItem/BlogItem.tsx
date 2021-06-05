import React, { useContext } from "react";
import Authentication from "../../Authentication";
import databaseQuery from "../../shared/databaseQuery";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TelegramIcon, WhatsappIcon } from "react-share";
// import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm";

interface BlogItemInterface {
  title: string;
  content: string;
  id: string;
}

const BlogItem: React.FC<BlogItemInterface> = ({ title, content, id }) => {
  const Auth = useContext(Authentication);
  const router = useRouter();
  const updateHandler = async (event) => {
    const id = event.target.id;
    router.push("/blogs/" + id);
  };
  const deleteHandler = async (event) => {
    const id = event.target.id;
    await databaseQuery("DELETE", undefined, id);
    router.push("/blog");
  };
  const gotoPage = (event) => {
    const id = event.target.id;
    router.push("/readOnly/" + id);
  };

  return (
    <div
      id={id}
      className="relative flex flex-col items-center justify-center w-2/3 my-4 bg-gray-100 rounded-lg"
    >
      <div className="absolute flex w-8 h-4 left-2 top-2">
        <FacebookShareButton url={"https://ericbryan.vercel.app/blog/" + id}>
          <FacebookIcon className="w-6 h-6" round={true}></FacebookIcon>
        </FacebookShareButton>
        <div className="px-1"></div>
        <WhatsappShareButton url={"https://ericbryan.vercel.app/blog/" + id}>
          <WhatsappIcon className="w-6 h-6" round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <div className="px-1"></div>
        <TelegramShareButton url={"https://ericbryan.vercel.app/blog/" + id}>
          <TelegramIcon className="w-6 h-6" round={true}></TelegramIcon>
        </TelegramShareButton>
      </div>

      {Auth.isAuthenticated && (
        <div className="absolute right-2 top-4">
          <button
            id={id}
            onClick={updateHandler}
            className="p-1 mr-2 border-2 border-blue-400 rounded-lg hover:bg-yellow-300"
          >
            Update
          </button>
          <button
            id={id}
            onClick={deleteHandler}
            className="p-1 mr-2 border-2 border-blue-400 rounded-lg hover:bg-yellow-300"
          >
            Delete
          </button>
        </div>
      )}
      <div className="py-4 text-3xl font-bold">{title}</div>
      <div>
        <span className="px-4">
          {/* <ReactMarkdown remarkPlugins={[gfm]} children={content.substr(0,100)}/> */}
          {content.substr(0, 100)}
        </span>
        <span
          onClick={gotoPage}
          id={id}
          className="flex items-center justify-center text-blue-500 cursor-pointer"
        >
          ...View More
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
