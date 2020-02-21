import React, { useEffect, useState } from "react";
import Card from "./Card";
import * as axios from "axios";

const url = "https://alena-nails.firebaseio.com";

const Main = ({ isEdit, openEditWindow, setItemId }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    const response = await axios.get(`${url}/notes.json`);

    const payload = Object.keys(response.data).map(key => {
      return {
        ...response.data[key],
        id: key
      };
    });
    setData(payload);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div
            id="custom_main"
            className="ui four column doubling stackable grid container "
          >
            <div className="row">
              <div className="ui four doubling stackable cards">
                {data.reverse().map(item => {
                  return (
                    <Card
                      setItemId={setItemId}
                      isEdit={isEdit}
                      openEditWindow={openEditWindow}
                      name={item.name}
                      price={item.price}
                      image={item.url}
                      about={item.description}
                      key={item.id}
                      id={item.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
