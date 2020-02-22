import React from "react";

const Contacts = ({ closeContacts }) => {
  return (
    <div className="modal_container ">
      <div className="custom_modal contacts_modal">
        <div className="contacts_icons">
          <i className="ui icon phone"></i>+380 (66) 907 55 40
        </div>

        <div className="contacts_icons">
          <i className="ui icon instagram"></i>
          Алена Гончаренко
        </div>
        <div className="contacts_icons">
          <i className="ui icon viber"></i>
          Алена Гончаренко
        </div>
        <button onClick={closeContacts} className="ui button black">
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Contacts;
