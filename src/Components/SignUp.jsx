import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  // signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useContext } from "react";

import { database } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { SignUpContext } from "../ContextAPI/SignUpContext";
import { persondata } from "../Datas/signupData";
import TopNavBar from "./TopNavBar";
import { navMembers, companyDetails } from "../Datas/NavMembers";

const SignUp = () => {
  const {
    setUser,
    isSignUp,
    setIsSignUp,
    setCookie,
    person,
    setPerson,
    setDbUser,
  } = useContext(SignUpContext);
  var check = false;

  const usersCollectionRef = collection(database, "users");

  //Firebase Authentication
  const register = async ({ ...userEmailnPassword }) => {
    var user = "null";
    try {
      user = await createUserWithEmailAndPassword(
        auth,
        userEmailnPassword.email,
        userEmailnPassword.password
      );
      setIsSignUp(true);
      setCookie("Name", userEmailnPassword.email, { path: "/" });
      setCookie("Password", userEmailnPassword.password, { path: "/" });
    } catch (error) {
      console.log(`There is an error: ${error.message}`);
    }
    return user;
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // end Firebase authentication

  //CRUD - create, read, update, delete
  //create
  const createUser = async (personData) => {
    try {
      await addDoc(usersCollectionRef, { ...personData });
    } catch (error) {
      console.error("writeToDB failed. reason :", error.message);
    }
  };
  //read
  useEffect(() => {
    const navbarId = document.getElementById("navbarIdx");
    navbarId.style.backgroundColor = "rgb(75, 125, 125)";

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setDbUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }); //,[]
  //update
  const updateUser = async (id, age) => {
    const userDoc = doc(database, "users", id);
    const newFields = { age: age + 1 }; // field to be changed
    await updateDoc(userDoc, newFields);
  };
  //delete
  const deleteUser = async (id) => {
    const userDoc = doc(database, "users", id);
    await deleteDoc(userDoc);
  };

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
      delete newPerson.id;
      //createUser(newPerson);
      register(newPerson);
      setPerson({ persondata });
    }
  };
  if (check === true) {
    createUser();
    updateUser();
    deleteUser();
  }
  return (
    <>
      <TopNavBar
        companyName={companyDetails}
        navArray={navMembers}
        isNavbarId={false}
      />
      {isSignUp ? <Navigate to="/" replace={true} /> : signupForm()}
      <Outlet />
    </>
  );

  function signupForm() {
    return (
      <fieldset className="form">
        <legend className="usersign">Sign Up</legend>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
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
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password: </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={person.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="signinLink">
            <p>Already a member?</p>
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
          <div className="signupBTN">
            <button type="submit" className="btn">
              SignUp
            </button>
          </div>
        </form>
      </fieldset>
    );
  }
};

export default SignUp;

// const logout = async () => {
//   await signOut(auth);
// };
// const login = async () => {
//   try {
//     const user = await signInWithEmailAndPassword(
//       auth,
//       newPerson.email,
//       newPerson.password
//     );
//     // console.log("Success");
//     console.log(user);
//   } catch (error) {
//     // console.log("There is an error");
//     console.log(error.message);
//   }
// };
