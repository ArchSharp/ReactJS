import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SignUp = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (person.firstName && person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      delete newPerson.confirmPassword;
      console.log(newPerson);
      setPerson({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const { id, firstName, lastName, email, password } = newPerson;
      const response = await fetch(
        "https://archintel-api-default-rtdb.firebaseio.com/signupDB.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );
      if (response.status === 200) {
        console.log("Success signup");
      }
    }
  };
  return (
    <>
      <fieldset className="form">
        <legend className="usersign">Sign Up</legend>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">First Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name : </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
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
          <div className="form-control">
            <label htmlFor="password">Confirm Password : </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={person.confirmPassword}
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
            <p>Already a member? </p>
            <Link
              style={{ marginLeft: "10px" }}
              to="/user/signin"
              className="links"
              target="_self"
              rel="noreferrer"
            >
              SignIn
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
              SignUp
            </button>
          </div>
        </form>
      </fieldset>
      <Outlet />
    </>
  );
};

export default SignUp;
