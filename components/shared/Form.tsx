import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

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
  onTitleChange?: any
  onContentChange?: any
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
  onContentChange
}) => {
  console.log(<ReactMarkdown remarkPlugins={[gfm]} children={secondValue}/>)
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-green-100">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-left bg-yellow-100 border-2 border-green-700 rounded-lg shadow-2xl"
      >
        <Link href="/blog">
          <div className="px-2 pt-1">
            <img
              className="mr-4 text-green-200 inline cursor-default cursor-pointer"
              width={20}
              src="/arrow.png"
            />
          </div>
        </Link>
        <div className="font-bold text-center p-2 text-2xl">{title}</div>
        {firstTitle && <div className="p-4 flex flex-col">
          {<label className="pr-2 font-bold">{firstTitle}</label>}
          {type === "input" && (
            <input className="p-1" type={firstType} name={firstName}></input>
          )}
          {type ==="textarea" && (
            <textarea className="p-1" name={firstName} rows={3} cols={50} value={firstValue} onChange={onTitleChange}></textarea>
          )}  
        </div>}
        <div className="p-4 flex flex-col">
          {secondTitle && <label className="pr-2 font-bold">{secondTitle}</label>}
          {type === "input" ? (
            <input className="p-1" type={secondType} name={secondName}></input>
          ) : ( firstTitle ?
            <textarea className="p-1" name={secondName} rows={10} cols={50} value={secondValue} onChange={onContentChange}></textarea>
            :
            <div className="bg-white rounded-md p-1 w-60 h-60">
                <ReactMarkdown remarkPlugins={[gfm]} children={secondValue}/>
            </div>  
          )}
        </div>
        {!readOnly &&<div className="p-4">
          <button
            className="font-bold border-2 rounded-lg bg-yellow-500 px-3 py-1 hover:bg-yellow-300"
            type="submit"
          >
            Submit
          </button>
        </div>}
      </form>
    </div>
  );
};

export default Form;
