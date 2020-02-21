import React from "react";
import { ReactComponent as Logo } from "../Logo_Nails_SVG.svg";

const Navbar = ({ onIsAdd, toggleIsEdit }) => {
  return (
    <>
      <div className="navbar">
        <button onClick={onIsAdd}>Add</button>
        <button onClick={toggleIsEdit}>Edit</button>
        <Logo />
      </div>
    </>
  );
};

export default Navbar;
