import React from "react";
import Form from "../shared/Form";
import {useRouter} from "next/router"
import databaseQuery from "../shared/databaseQuery"

const AddPost: React.FC = () => {
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    await databaseQuery("POST", {title, content});
    router.push("/blog")
  };
  return (
    <Form
      title="Create a post"
      firstTitle="Title"
      type="textarea"
      firstName="title"
      secondTitle="Content"
      secondName="content"
      submitHandler={submitHandler}
      readOnly={false}
    />
  );
};

export default AddPost;
