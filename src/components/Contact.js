import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate("/")
    }
  return (
    <>
      <section>
        <h1>Contact</h1>
        <button onClick={goToHome}>go to Home Page</button>
        <button
          onClick={() => {
            navigate(-1);
          }}>
          go back
        </button>
      </section>
    </>
  );
};

export default Contact;
