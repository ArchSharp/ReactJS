import React from "react";
import { Link, Outlet } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name : </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value=""
              onChange={() => {}}
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
