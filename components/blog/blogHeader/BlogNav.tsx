import React, { useContext } from "react";
import NavBar from "../../shared/NavBar";
import Authentication from "../../Authentication";

const BlogNav: React.FC = () => {
  const Auth = useContext(Authentication);
  return (
    <div className="bg-yellow-300 pl-6">
      <NavBar text="My Portfolio" url="/" hasArrow={true} />
      {Auth.isAuthenticated && (
        <div className="absolute right-6 top-0">
          <NavBar text="Add Post" url="/addPost" hasArrow={false} />
        </div>
      )}
    </div>
  );
};

export default BlogNav;
