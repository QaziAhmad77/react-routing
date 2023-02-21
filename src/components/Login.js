import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <h1>Login Page</h1>
      <input type="text" style={{ margin: "5px", height: "30px", borderRadius: "1rem" }} />
      <br />
      <input type="text" style={{ margin: "5px", height: "30px", borderRadius: "1rem" }} />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
