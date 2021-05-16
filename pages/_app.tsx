import "../styles/globals.css";
import Authentication from "../components/Authentication"; 
import {useState} from "react"

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Authentication.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
    }}>
      <Component {...pageProps} />
    </Authentication.Provider>
  );
}

export default MyApp;
