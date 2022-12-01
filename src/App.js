import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
// import "./index.css";
import "./archintel.css";
import "./archintel.scss";
import LayOut from "./Components/LayOut";
import NoPage from "./Components/NoPage";
// import User from "./Components/User";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { SignUpContext } from "./ContextAPI/SignUpContext";

export function ArchIntelWebsite() {
  const [user, setUser] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [person, setPerson] = useState({});
  const [dbUser, setDbUser] = useState([]);
  const [cookies, setCookie] = useCookies(["cookieUser"]);
  const [refresh, setRefresh] = useState(false);
  

  useEffect(() => {
    if (refresh) {
      window.location.reload();
      console.log(`Resfresh ${refresh} ${window.location}`);
      setRefresh(false);
    }

    const handleScroll = (event) => {
      var scrolPosition = window.pageYOffset;
      const navbarId = document.getElementById("navbarId");
      var sticky = navbarId.offsetTop;
      if (scrolPosition >= sticky + 10) {
        navbarId.style.backgroundColor = "rgb(75, 125, 125)";
      } else if (scrolPosition < sticky + 10) {
        navbarId.style.backgroundColor = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refresh]);

  return (
    <>
      {refresh && console.log(`User is ${user.email}`)}
      <CookiesProvider>
        <SignUpContext.Provider
          value={{
            isSignUp,
            setIsSignUp,
            user,
            setUser,
            cookies,
            setCookie,
            person,
            setPerson,
            dbUser,
            setDbUser,
            setRefresh,            
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LayOut />}></Route>
              {/* <Route path="/" element={<User />}> */}
              <Route path="user/signin" element={<SignIn />}></Route>
              <Route path="user/signup" element={<SignUp />}></Route>
              {/* </Route> */}
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </SignUpContext.Provider>
      </CookiesProvider>
    </>
  );
}
