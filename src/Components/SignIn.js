import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="usersign">SignIn</div>
      <div className="form">
        <form>
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
          <button>SignIn</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
