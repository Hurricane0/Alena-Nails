import React, { useState } from "react";

const Instruction = () => {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };
  return (
    <div className="ui container instruction_container">
      {showInstruction ? (
        <>
          <span
            onClick={toggleInstruction}
            style={{ color: "red", marginBottom: "10px" }}
            className="toggle_instruction"
          >
            Закрыть инструкцию
          </span>
          <p>
            <i className="hand point right ui icon "></i>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://cloudinary.com/console/c-cc2ee3399500d9bf5d70727ac25863/media_library/folders/%2F"
            >
              Нажмите сюда чтоб перейти по ссылке
            </a>
          </p>
          <p>Скопируйте этот email: nikitadv777@gmail.com</p>
          <p>Скопируйте этот пароль: Nikita777!</p>
        </>
      ) : (
        <span
          onClick={toggleInstruction}
          style={{ color: "green" }}
          className="toggle_instruction"
        >
          Показать инструкцию
        </span>
      )}
    </div>
  );
};

export default Instruction;
