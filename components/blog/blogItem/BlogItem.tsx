import React, { useContext } from "react";
import Authentication from "../../Authentication";
import databaseQuery from "../../shared/databaseQuery";
import { useRouter } from "next/router";
import { FacebookShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon ,TelegramIcon, WhatsappIcon } from "react-share";
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

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
      className="relative flex flex-col justify-center items-center bg-gray-100 w-2/3 rounded-lg my-4"
    >
      <div className="absolute left-2 top-2 w-8 h-4 flex">
        <FacebookShareButton url={process.env.URL + "blog/" + id}>
          <FacebookIcon className="w-10 h-10" round={true}></FacebookIcon>
        </FacebookShareButton>
        <div className="px-1"></div>
        <WhatsappShareButton url={process.env.URL + "blog/" + id}>
          <WhatsappIcon className="w-10 h-10" round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <div className="px-1"></div>
        <TelegramShareButton url={process.env.URL + "blog/" + id}>
          <TelegramIcon className="w-10 h-10" round={true}></TelegramIcon>
        </TelegramShareButton>
      </div>

      {Auth.isAuthenticated && (
        <div className="absolute right-2 top-4">
          <button
            id={id}
            onClick={updateHandler}
            className="mr-2 p-1 border-2 border-blue-400 rounded-lg hover:bg-yellow-300"
          >
            Update
          </button>
          <button
            id={id}
            onClick={deleteHandler}
            className="mr-2 p-1 border-2 border-blue-400 rounded-lg hover:bg-yellow-300"
          >
            Delete
          </button>
        </div>
      )}
      <div className="font-bold text-3xl py-4">{title}</div>
      <div>
        <span className="px-4">
          <ReactMarkdown remarkPlugins={[gfm]} children={content.substr(0,100)}/>
        </span>
        <span onClick={gotoPage} id={id} className="flex justify-center items-center text-blue-500 cursor-pointer">
          ...View More
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
