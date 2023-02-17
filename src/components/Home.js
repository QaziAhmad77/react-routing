import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <a href="/">Logo</a>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/filter">Filter</NavLink>
          </li>
          <li>
            <NavLink to="/user/qazi">Qazi</NavLink>
          </li>
          <li>
            <NavLink to="/user/ahmad">Ahmad</NavLink>
          </li>
          <li>
            <NavLink to="/user/khan">Khan</NavLink>
          </li>
          <li>
            <NavLink to="/contactUs">ContactUs</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <h1 style={{ fontSize: "50px" }}>This is Home Page</h1>
    </>
  );
};

export default Home;
