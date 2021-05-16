import React, { useState} from "react";
import Form from "../../components/shared/Form";
import { useRouter } from "next/router";
import databaseQuery from "../../components/shared/databaseQuery";

const id = ({ data }) => {
  const router = useRouter();
  const idx = router.query.id;
  data = data.filter((item) => item._id === idx);
  console.log(data);
  const [title, changeTitle] = useState<string>(data[0].title);
  const [content, changeContent] = useState<string>(data[0].content);
  const updatePost = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    await databaseQuery("PUT", { title, content }, String(idx));
    router.push("/blog");
  };

  const onTitleChange = (event) => {
    changeTitle(event.target.value);
  };
  const onContentChange = (event) => {
    changeContent(event.target.value);
  };
  return (
    <Form
      title="Update your post"
      firstTitle="Title"
      type="textarea"
      firstName="title"
      secondTitle="Content"
      secondName="content"
      submitHandler={updatePost}
      readOnly={false}
      firstValue={title}
      secondValue={content}
      onTitleChange={onTitleChange}
      onContentChange={onContentChange}
    />
  );
};

id.getInitialProps = async () => {
  const data = await databaseQuery("GET");
  return data;
};

export default id;
