import React, { useState } from "react";

const Card = ({
  name,
  price,
  image,
  about,
  isEdit,
  openEditWindow,
  setItemId,
  id
}) => {
  const [isBig, setIsBig] = useState(false);

  const handleEdit = () => {
    openEditWindow();
    setItemId(id);
  };

  return (
    <div id="custom_card" className="ui fluid card ">
      {isBig ? (
        <div id="custom_big_picture">
          <div id="custom_div_image" className="image ">
            <img onClick={() => setIsBig(false)} src={image} alt="someImage" />
          </div>
        </div>
      ) : (
        <div className="image">
          <img onClick={() => setIsBig(true)} src={image} alt="someImage" />
        </div>
      )}

      <div className="content">
        <div className="header">{name}</div>

        <div className="description">{about}</div>
      </div>
      <div className="extra content">
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>
          <i className="tags icon"></i>
          {price}грн
        </span>
      </div>
      {isEdit ? (
        <button onClick={handleEdit} id="edit" className="negative ui button">
          Редактировать
        </button>
      ) : null}
    </div>
  );
};

export default Card;
