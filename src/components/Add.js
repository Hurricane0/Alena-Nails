import React, { useState } from "react";
import { storage } from "../firebase";
import * as axios from "axios";

const Add = ({ offIsAdd, toggleFakeAdd }) => {
  const url = "https://alena-nails.firebaseio.com";

  const [image, setImage] = useState(null);
  const [Url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const item = {
      name: name,
      url: Url,
      description: description,
      price: price
    };
    await axios.post(`${url}/notes.json`, item);
    toggleFakeAdd(true);
    offIsAdd();
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

  const handleChange = e => {
    if (e.target.files[0]) {
      const photo = e.target.files[0];
      setImage(photo);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
    setIsDownloaded(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal_container">
          <div className="custom_modal add_modal">
            <input onChange={handleChange} type="file" />

            <div>
              <i
                style={{
                  fontSize: "24px",
                  color: isDownloaded ? "green" : "red"
                }}
                className="hand point right ui icon"
              ></i>
              <button
                id="download"
                onClick={handleUpload}
                type="button"
                className={
                  isDownloaded
                    ? "tiny positive ui button"
                    : "tiny negative ui button"
                }
              >
                Загрузить фото
              </button>
            </div>
            <div className="ui input">
              <input
                value={name}
                onChange={handleName}
                type="text"
                placeholder="Название товара"
              />
            </div>
            <div className="ui input">
              <input
                value={description}
                onChange={handleDescription}
                type="text"
                placeholder="Описание"
              />
            </div>
            <div className="ui input">
              <input
                value={price}
                onChange={handlePrice}
                type="text"
                placeholder="Цена"
              />
            </div>
            <button className="button ui green" type="submit">
              Подтвердить
            </button>
            <button className="ui button black" onClick={offIsAdd}>
              Закрыть
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Add;
