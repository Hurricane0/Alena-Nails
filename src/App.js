import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Preloader from "./components/Preloader";
import Add from "./components/Add";
import EditWindow from "./components/EditWindow";
// import firebase, { app } from "firebase";

function App() {
  // const [users, setUsers] = useState([{ name: "nikita" }, { name: "sonya" }]);
  const [isEdit, setIsEdit] = useState(false);

  const [isEditWindow, setIsEditWindow] = useState(false);
  const [itemId, setItemId] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isAdd, setIsAdd] = useState(false);

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

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="App">
      {isLoading ? <Preloader /> : null}

      {/* Add mode for ADDING post */}
      {isAdd ? <Add offIsAdd={offIsAdd} /> : null}

      {isEditWindow ? (
        <EditWindow closeEditWindow={closeEditWindow} ID={itemId} />
      ) : null}

      <Navbar onIsAdd={onIsAdd} toggleIsEdit={toggleIsEdit} />

      <Main
        setItemId={setItemId}
        isEdit={isEdit}
        openEditWindow={openEditWindow}
      />
    </div>
  );
}

export default App;
