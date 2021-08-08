import "../styles/globals.css";
import Authentication from "../components/Authentication";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Eric Bryan";
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Authentication.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <Component {...pageProps} />
    </Authentication.Provider>
  );
}

export default MyApp;
