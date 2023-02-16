import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
        <h1>About</h1>
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
    </>
  );
};

export default About;
