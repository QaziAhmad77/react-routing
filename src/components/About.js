import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    let x = true;
    if (x) {
      navigate("/contact");
    } else {
      navigate("/filter");
    }
  };
  return (
    <>
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
        </ul>
      </nav>
      <section>
        <h1 style={{ fontSize: "50px" }}>About</h1>
        <button
          onClick={() => {
            goToContact();
          }}>
          go to Contact page
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}>
          go back
        </button>
      </section>
      <h1 style={{ fontSize: "50px" }}>This is About Page</h1>
    </>
  );
};

export default About;
