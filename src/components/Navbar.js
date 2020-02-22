import React from "react";
import { ReactComponent as Logo } from "../Logo_Nails_SVG.svg";

const Navbar = ({ onIsAdd, toggleIsEdit, editMode, openContacts }) => {
  return (
    <>
      <div className="navbar ">
        <div className="div_for_content">
          {editMode ? (
            <span>
              <button className="add_button" onClick={onIsAdd}>
                Добавить
              </button>
              <button className="edit_button" onClick={toggleIsEdit}>
                Редакт
              </button>
            </span>
          ) : null}

          <Logo />
          <span onClick={openContacts} className="contacts">
            <i class="phone icon"></i>Контакты
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
