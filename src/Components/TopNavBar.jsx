import React, { useContext } from "react";
import { useState ,useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { SignUpContext } from "../ContextAPI/SignUpContext";

function TopNavBar({ companyName, navArray, isNavbarId }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const { storage, setStorage, cookies, setCookie, setUser, setRefresh } =
    useContext(SignUpContext);
  var navbarId = isNavbarId === true ? "navbarId" : "navbarIdx";

  useEffect(() => {
    const getLocalStorage = (name) => {
      let list = localStorage.getItem(name);
      if (list) {
        list = JSON.parse(list);
        setStorage(list);
        // console.log("success");
        return list;
      } else {
        console.log("error");
        return [];
      }
    };
    getLocalStorage(cookies.Email);
  }); // cookies.Email, setStorage, storage

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async (event) => {
    event.preventDefault();
    try {
      // console.log(`success log out ${index} ${navName}`);
      setCookie("Email", "", { path: "/" });
      setCookie("Password", "", { path: "/" });
      setRefresh(true);
      await signOut(auth);
    } catch (error) {
      console.log(`There is an error: ${error.message}`);
    }
  };
  return (
    <>
      <div className="navbar_x fixed" id={navbarId}>
        <div className="companyName">
          <a href="#Home">
            <img key={1} src={companyName[1]} alt={companyName[0]} />
            <span key={0}>{companyName[0]}</span>
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "nav_x expanded" : "nav_x"} id="navId">
          <ul>
            {" "}
            {navArray
              .filter((nav, index) => {
                if (
                  (cookies.Email && (index === 5 || index === 6)) ||
                  (!cookies.Email && index === 8)
                ) {
                  return false;
                }
                return true;
              })
              .map((navMember, index) => {
                const { navName, navLink, submenu } = navMember;
                return (
                  <>
                    <li key={index}>
                      {submenu ? (
                        <>
                          {submenu.map((menu, index) => {
                            const { navName, navLink } = menu;
                            return (
                              <Link
                                className="links"
                                to={navLink}
                                target="_self"
                                rel="noreferrer"
                                onClick={index === 2 ? logout : () => {}}
                              >
                                {/* {console.log({submenu})} */}
                                {index === 0 ? storage.firstName : navName}
                              </Link>
                            );
                          })}
                        </>
                      ) : (
                        <Link
                          to={navLink}
                          className="links"
                          target="_self"
                          rel="noreferrer"
                          onClick={
                            index === 6 && cookies.Email !== ""
                              ? logout
                              : () => {}
                          }
                        >
                          {navName}
                        </Link>
                      )}
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default TopNavBar;
