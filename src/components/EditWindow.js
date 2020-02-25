import React from "react";
import * as axios from "axios";
import firebase from "firebase";
import { useState } from "react";

const EditWindow = ({ closeEditWindow, ID, showDelele }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const URL = "https://alena-nails.firebaseio.com";

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
    //URL
    else if (url.trim()) {
      itemRef.update({
        url: url
      });
    }
  };

  const remove = async id => {
    await axios.delete(`${URL}/notes/${id}.json`);
    closeEditWindow();
    showDelele(id);
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
  const handleUrl = e => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal_container ">
        <div className="custom_modal edit_window">
          <div className="ui fluid input error">
            <input
              value={url}
              onChange={handleUrl}
              type="text"
              placeholder="Новый адресс фото"
            />
          </div>
          <div className="ui fluid input">
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder="Новое название"
            />
          </div>
          <div className="ui fluid input">
            <input
              value={description}
              onChange={handleDescription}
              type="text"
              placeholder="Новое описание"
            />
          </div>
          <div className="ui fluid input">
            <input
              value={price}
              onChange={handlePrice}
              type="text"
              placeholder="Новая цена"
            />
          </div>
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
        </div>
      </div>
    </form>
  );
};

export default EditWindow;
