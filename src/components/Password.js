import React, { useState } from "react";

const Password = ({ switchEditMode, unhandlePassword }) => {
  const [password, setPassword] = useState("");
  const [rightPass, setRightPass] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (password === "1983") {
      setRightPass(true);
      switchEditMode();
      unhandlePassword();
    } else {
      setRightPass(false);
    }
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal_container ">
        <div className="custom_modal edit_window password_modal">
          <p className="warning_editor_mode">Внимание! Режим разработчика!</p>
          <div className="ui fluid input">
            <input
              value={password}
              onChange={handlePassword}
              type="text"
              placeholder="Введите пароль"
            />
          </div>
          {rightPass ? (
            <p></p>
          ) : (
            <p className="warning_incorrect_password">Неправильный пароль!</p>
          )}

          <button type="submit" className="ui button fluid positive">
            Подтвердить
          </button>
          <button onClick={unhandlePassword} className="ui button fluid black">
            Закрыть
          </button>
          <p></p>
        </div>
      </div>
    </form>
  );
};

export default Password;
