import React, { useState } from "react";
import ReactDom from "react-dom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
import "./archintel.css";
import "./archintel.scss";
import LayOut from "./Components/LayOut";
import NoPage from "./Components/NoPage";
// import User from "./Components/User";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { SignUpContext } from "./ContextAPI/SignUpContext";


function ArchIntelWebsite() {
  const [user, setUser] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  useEffect(() => {
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
  }, []);

  return (
    <>
      {user && console.log(`User is ${user.email}`)}
      <SignUpContext.Provider value={{ isSignUp, setIsSignUp, user, setUser }}>
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
    </>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
