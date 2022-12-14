import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const User = () => {
  const [switchSign, SetSwitchSign] = useState(0);
  if (switchSign === 2) {
    SetSwitchSign(3);
  }
  return <>{switchSign === 0 ? <SignUp /> : <SignIn />}</>;
};

export default User;
