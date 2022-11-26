import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import TopNavBar from "./TopNavBar";
import { navMembers, companyDetails } from "../Datas/NavMembers";

const SignIn = () => {
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      console.log(newPerson);
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
      <fieldset className="form">
        <legend className="usersign">Sign In</legend>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            <p>Not a member? </p>
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
            <button type="submit" className="btn">
              SignIn
            </button>
          </div>
        </form>
      </fieldset>
      <Outlet />
    </>
  );
};

export default SignIn;
