import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ fontSize: "60px", marginLeft: "auto,", marginRight: "auto" }}>404 Error</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}>
        go back
      </button>
    </>
  );
};

export default Error;
