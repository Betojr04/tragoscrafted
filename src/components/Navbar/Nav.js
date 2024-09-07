import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="logo">Logo</div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <div onClick={() => setOpen(false)}>HOME</div>
        <div onClick={() => setOpen(false)}>ABOUT</div>
        <div onClick={() => setOpen(false)}>GET IN TOUCH</div>
      </div>
    </nav>
  );
};
