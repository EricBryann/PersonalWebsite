import BlogHeader from "../components/blog/blogHeader/BlogHeader";
import BlogNav from "../components/blog/blogHeader/BlogNav";
import BlogItemList from "../components/blog/blogItem/BlogItemList";
import databaseQuery from "../components/shared/databaseQuery";

const blog = ({ data }) => {
  return (
    <>
      <BlogNav />
      <BlogHeader />
      <BlogItemList items={data} />
    </>
  );
};

blog.getInitialProps = async () => {
  const data = await databaseQuery("GET");
  return data;
};

export default blog;
