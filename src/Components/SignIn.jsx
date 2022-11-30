import React, { useState, useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  // signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpContext } from "../ContextAPI/SignUpContext";
import { useContext } from "react";

import TopNavBar from "./TopNavBar";
import { navMembers, companyDetails } from "../Datas/NavMembers";

const SignIn = () => {
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });
  const [eyeShow, setEyeShow] = useState(false);
  const { setUser, isSignUp, setIsSignUp, setCookie, setRefresh } =
    useContext(SignUpContext);

  const login = async ({ ...userEmailnPassword }) => {
    var user = "null";
    console.log(
      "Login ",
      userEmailnPassword.email,
      " ",
      userEmailnPassword.password
    );
    try {
      user = await signInWithEmailAndPassword(
        auth,
        userEmailnPassword.email,
        userEmailnPassword.password
      );
      setIsSignUp(true);
      setRefresh(true);
      setCookie("Email", userEmailnPassword.email, { path: "/" });
      setCookie("Password", userEmailnPassword.password, { path: "/" });
    } catch (error) {
      console.log(`There is an error: ${error.message}`);
    }
    return user;
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //show and hide password
  let passwordType = eyeShow ? "text" : "password";
  const handleShowPassword = () => {
    setEyeShow(!eyeShow);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      delete newPerson.id;
      console.log(newPerson);
      login(newPerson);
      setPerson({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    const navbarId = document.getElementById("navbarIdx");
    navbarId.style.backgroundColor = "rgb(75, 125, 125)";
  });
  return (
    <>
      <TopNavBar
        companyName={companyDetails}
        navArray={navMembers}
        isNavbarId={false}
      />
      {isSignUp ? <Navigate to="/" replace={true} /> : signIn()}
      <Outlet />
    </>
  );

  function signIn() {
    return (
      <fieldset className="form">
        <legend className="usersign">Sign In</legend>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password: </label>
            <input
              type={passwordType}
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
            {eyeShow ? (
              <FiEye className="eye" onClick={handleShowPassword} />
            ) : (
              <FiEyeOff className="eye" onClick={handleShowPassword} />
            )}
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            <p>Not a member?</p>
            <Link
              style={{ marginLeft: "10px" }}
              to="/user/signup"
              className="links"
              target="_self"
              rel="noreferrer"
            >
              SignUp
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: "fit-content",
            }}
          >
            <button type="submit" className="btn" onClick={login}>
              SignIn
            </button>
          </div>
        </form>
      </fieldset>
    );
  }
};

export default SignIn;
