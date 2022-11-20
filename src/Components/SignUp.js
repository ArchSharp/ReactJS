import React from "react";

const SignUp = () => {
  return (
    <>
      <div
        style={{
          width: "fit-content",
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "30px",
          color: "#072A6C",
          fontWeight: "bolder",
        }}
      >
        SignUp
      </div>
      <div className="form">
        <form>
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
        </form>
      </div>
    </>
  );
};

export default SignUp;
