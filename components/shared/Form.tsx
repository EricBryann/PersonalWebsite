import React from "react";
import Link from "next/link";
// import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm";

interface FormInterface {
  title: string;
  firstTitle?: string;
  type?: string;
  firstType?: string;
  firstName: string;
  secondTitle?: string;
  secondType?: string;
  secondName: string;
  submitHandler?: any;
  readOnly: boolean;
  firstValue?: string;
  secondValue?: string;
  onTitleChange?: any;
  onContentChange?: any;
}

const Form: React.FC<FormInterface> = ({
  title,
  firstTitle,
  type,
  firstType,
  firstName,
  secondTitle,
  secondType,
  secondName,
  submitHandler,
  readOnly,
  firstValue,
  secondValue,
  onTitleChange,
  onContentChange,
}) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-green-100">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center bg-yellow-100 border-2 border-green-700 rounded-lg shadow-2xl items-left"
      >
        <Link href="/blog">
          <div className="px-2 pt-1">
            <img
              className="inline mr-4 text-green-200 cursor-default cursor-pointer"
              width={20}
              src="/arrow.png"
            />
          </div>
        </Link>
        <div className="p-2 text-2xl font-bold text-center">{title}</div>
        {firstTitle && (
          <div className="flex flex-col p-4">
            {<label className="pr-2 font-bold">{firstTitle}</label>}
            {type === "input" && (
              <input className="p-1" type={firstType} name={firstName}></input>
            )}
            {type === "textarea" && (
              <textarea
                className="p-1"
                name={firstName}
                rows={3}
                cols={50}
                value={firstValue}
                onChange={onTitleChange}
              ></textarea>
            )}
          </div>
        )}
        <div className="flex flex-col p-4">
          {secondTitle && (
            <label className="pr-2 font-bold">{secondTitle}</label>
          )}
          {type === "input" ? (
            <input className="p-1" type={secondType} name={secondName}></input>
          ) : (
            <textarea
              className="p-1"
              name={secondName}
              rows={18}
              cols={75}
              value={secondValue}
              onChange={onContentChange}
            ></textarea>
          )}
        </div>
        {!readOnly && (
          <div className="p-4">
            <button
              className="px-3 py-1 font-bold bg-yellow-500 border-2 rounded-lg hover:bg-yellow-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
