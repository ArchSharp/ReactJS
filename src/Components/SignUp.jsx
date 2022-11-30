import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";

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
import { persondata, formData } from "../Datas/signupData";
import TopNavBar from "./TopNavBar";
import { navMembers, companyDetails } from "../Datas/NavMembers";
import { useState } from "react";

const SignUp = () => {
  const [showError, setShowError] = useState(false);
  const [formError, setFormError] = useState([]);
  const [eyeShow, setEyeShow] = useState(false);
  const {
    setUser,
    isSignUp,
    setIsSignUp,
    setCookie,
    person,
    setPerson,
    setDbUser,
    setRefresh,
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

    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
        setFormError([]);
      }, 2000);
      return () => clearTimeout(timer);
    }

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
  function changeDesc(value, desc) {
    for (var i in formData) {
      if (formData[i].htmlFor === value) {
        formData[i].type = desc;
        break; //Stop this loop, we found it!
      }
    }
  }
  eyeShow ? changeDesc("password", "text") : changeDesc("password", "password");

  const handleShowPassword = () => {
    setEyeShow(!eyeShow);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (person.password !== person.confirmPassword) {
      setFormError(...formError, { error: "Password do not match!" });
      setShowError(true);
      return;
    }
    if (person.firstName === "") {
      setFormError(...formError, { error: "Please eneter First Name!" });
      setShowError(true);
      return;
    }

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
    const formArray = [
      person.firstName,
      person.lastName,
      person.email,
      person.password,
      person.confirmPassword,
    ];
    return (
      <fieldset className="form">
        <legend className="usersign">Sign Up</legend>
        <form onSubmit={handleSubmit}>
          {showError && (
            <div className="formError">
              <span>{formError.error}</span>
            </div>
          )}
          {formData.map((eachFormData, index) => {
            const { htmlFor, labelName, type, id, name } = eachFormData;
            return (
              <div className="form-control">
                <label htmlFor={htmlFor}>{labelName}: </label>
                <input
                  type={type}
                  id={id}
                  name={name}
                  value={formArray[index]}
                  onChange={handleChange}
                />
                {index === 3 && (
                  <>
                    {eyeShow ? (
                      <FiEye className="eye" onClick={handleShowPassword} />
                    ) : (
                      <FiEyeOff className="eye" onClick={handleShowPassword} />
                    )}
                  </>
                )}
                {index===3}
              </div>
            );
          })}          
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
