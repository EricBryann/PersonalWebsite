import React, {useContext} from "react";
import { useRouter } from "next/router";
import Authentication from "../../components/Authentication";
import Form from "../shared/Form";

const Admin = () => {
  const Auth = useContext(Authentication);
  const router = useRouter();
  const checkAuth = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(email === process.env.adminEmail && password === process.env.adminPassword) {
      Auth.setIsAuthenticated(true);
      router.push("/blog");
    }
    else {
      alert("Wrong credentials")
    }
  };
  return (
    <Form
      title="Log in to Authenticate!"
      firstTitle="Email"
      type="input"
      firstName="email"
      firstType="text"
      secondTitle="Password"
      secondName="password"
      secondType="password"
      submitHandler={checkAuth}
      readOnly={false}
    />
  );
};

export default Admin;
