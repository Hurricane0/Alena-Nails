import React from "react";
import * as axios from "axios";
import firebase from "firebase";
import { useState } from "react";

const EditWindow = ({ closeEditWindow, ID }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const url = "https://alena-nails.firebaseio.com";

  const database = firebase.database();
  const itemRef = database.ref("notes/" + ID);

  const update = () => {
    //NAME
    if (name.trim() && !description.trim() && !price.trim()) {
      itemRef.update({
        name: name
      });
    }
    //DESCRIPTION
    else if (!name.trim() && description.trim() && !price.trim()) {
      itemRef.update({
        description: description
      });
    }
    //PRICE
    else if (!name.trim() && !description.trim() && price.trim()) {
      itemRef.update({
        price: price
      });
    }
    //NAME + DESCRIPTION
    else if (name.trim() && description.trim() && !price.trim()) {
      itemRef.update({
        name: name,
        description: description
      });
    }
    //NAME + DESCRIPTION + PRICE
    else if (name.trim() && description.trim() && price.trim()) {
      itemRef.update({
        name: name,
        description: description,
        price: price
      });
    }
    //DESCRIPTION + PRICE
    else if (!name.trim() && description.trim() && price.trim()) {
      itemRef.update({
        description: description,
        price: price
      });
    }
    //NAME + PRICE
    else if (name.trim() && !description.trim() && price.trim()) {
      itemRef.update({
        name: name,
        price: price
      });
    }
  };

  const remove = async id => {
    await axios.delete(`${url}/notes/${id}.json`);
    closeEditWindow();
  };

  const handleSubmit = e => {
    e.preventDefault();
    update();
    closeEditWindow();
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleDescription = e => {
    setDescription(e.target.value);
  };
  const handlePrice = e => {
    setPrice(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal_container ">
        <div className="custom_modal edit_window">
          <div className="ui fluid input">
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder="Новое название"
            />
          </div>
          <p></p>
          <div className="ui fluid input">
            <input
              value={description}
              onChange={handleDescription}
              type="text"
              placeholder="Новое описание"
            />
          </div>
          <p></p>
          <div className="ui fluid input">
            <input
              value={price}
              onChange={handlePrice}
              type="text"
              placeholder="Новая цена"
            />
          </div>
          <p></p>
          <button
            type="button"
            onClick={() => remove(ID)}
            className="ui button negative fluid"
          >
            Удалить товар
          </button>

          <button className="ui positive button" type="submit">
            Подтвердить
          </button>
          <button
            type="button"
            onClick={closeEditWindow}
            className="ui black button"
          >
            Закрыть
          </button>
          <p></p>
        </div>
      </div>
    </form>
  );
};

export default EditWindow;
