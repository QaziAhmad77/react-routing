import React from "react";
import { Link, Outlet } from "react-router-dom";

const CotactUs = () => {
  return (
    <div>
      <h1>This is contact us page</h1>
      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="others">Others</Link>
      <Outlet />
    </div>
  );
};

export default CotactUs;
