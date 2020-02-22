import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Preloader from "./components/Preloader";
import Add from "./components/Add";
import EditWindow from "./components/EditWindow";
import Password from "./components/Password";
import Contacts from "./components/Contacts";
function App() {
  // const [users, setUsers] = useState([{ name: "nikita" }, { name: "sonya" }]);
  const [isEdit, setIsEdit] = useState(false);

  const [isEditWindow, setIsEditWindow] = useState(false);
  const [itemId, setItemId] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isAdd, setIsAdd] = useState(false);

  const [deleteId, setDeleteId] = useState(null);
  const [fakeAdd, setFakeAdd] = useState(false);

  const [passwordRequired, setPasswordRequired] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [isContacts, setIsContacts] = useState(false);

  const openEditWindow = () => {
    setIsEditWindow(true);
  };
  const closeEditWindow = () => {
    setIsEditWindow(false);
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const onIsAdd = () => {
    setIsAdd(true);
  };
  const offIsAdd = () => {
    setIsAdd(false);
  };

  const showDelele = id => {
    setDeleteId(id);
  };

  const toggleFakeAdd = bool => {
    setFakeAdd(bool);
  };

  const handlePassword = () => {
    setPasswordRequired(true);
  };

  const unhandlePassword = () => {
    setPasswordRequired(false);
  };

  const switchEditMode = () => {
    setEditMode(true);
  };

  const openContacts = () => {
    setIsContacts(true);
  };

  const closeContacts = () => {
    setIsContacts(false);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="App">
      {isLoading ? <Preloader /> : null}

      {/* Add mode for ADDING post */}
      {isAdd ? <Add offIsAdd={offIsAdd} toggleFakeAdd={toggleFakeAdd} /> : null}

      {isEditWindow ? (
        <EditWindow
          closeEditWindow={closeEditWindow}
          ID={itemId}
          showDelele={showDelele}
        />
      ) : null}

      {passwordRequired ? (
        <Password
          switchEditMode={switchEditMode}
          unhandlePassword={unhandlePassword}
        />
      ) : null}

      {isContacts ? <Contacts closeContacts={closeContacts} /> : null}

      <Navbar
        onIsAdd={onIsAdd}
        toggleIsEdit={toggleIsEdit}
        editMode={editMode}
        openContacts={openContacts}
      />

      <Main
        setItemId={setItemId}
        isEdit={isEdit}
        openEditWindow={openEditWindow}
        deleteId={deleteId}
        toggleFakeAdd={toggleFakeAdd}
        fakeAdd={fakeAdd}
      />
      <div className="password_button_div">
        <i
          onClick={handlePassword}
          style={{ fontSize: "24px" }}
          class="paperclip icon"
        ></i>
      </div>
    </div>
  );
}

export default App;
