import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
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
        <h1 style={{ fontSize: "50px" }}>Contact</h1>
        <button onClick={goToHome}>go to Home Page</button>
        <button
          onClick={() => {
            navigate(-1);
          }}>
          go back
        </button>
      </section>
      <h1 style={{ fontSize: "50px" }}>This is {name} Page</h1>
    </>
  );
};

export default User;
