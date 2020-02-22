import React from "react";
import { ReactComponent as Logo } from "../Logo_Nails_SVG.svg";

const Navbar = ({ onIsAdd, toggleIsEdit, editMode }) => {
  return (
    <>
      <div className="navbar">
        {editMode ? (
          <span>
            <button className="add_button" onClick={onIsAdd}>
              Add
            </button>
            <button className="edit_button" onClick={toggleIsEdit}>
              Edit
            </button>
          </span>
        ) : null}

        <Logo />
      </div>
    </>
  );
};

export default Navbar;
