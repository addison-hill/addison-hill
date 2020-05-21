import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
}

export default Nav;
