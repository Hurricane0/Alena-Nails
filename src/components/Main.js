import React, { useEffect, useState } from "react";
import Card from "./Card";
import * as axios from "axios";
import Paginator from "./Paginator";

const url = "https://alena-nails.firebaseio.com";

const Main = ({
  isEdit,
  openEditWindow,
  setItemId,
  deleteId,
  fakeAdd,
  toggleFakeAdd
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(null);

  const fetch = async () => {
    const response = await axios.get(`${url}/notes.json`);

    const payload = Object.keys(response.data).map(key => {
      return {
        ...response.data[key],
        id: key
      };
    });
    setData(payload.reverse());
    setPageData(payload.slice(0, currentPage * 20));
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  const onPageChanged = page => {
    if (page === 1) {
      setPageData(data.slice(0, page * 20));
    } else {
      setPageData(data.slice(20 * (page - 1), 20 * page));
    }
    setCurrentPage(page);
  };

  if (fakeAdd) {
    fetch();
    toggleFakeAdd(false);
  }

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div>
          <div
            id="custom_main"
            className="ui four column doubling stackable grid container "
          >
            <div className="row">
              <div className="ui four doubling stackable cards">
                {pageData.map(item => {
                  if (item.id === deleteId) {
                    return null;
                  } else {
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
                  }
                })}
              </div>
            </div>

            {data.length > 20 ? (
              <Paginator
                onPageChanged={onPageChanged}
                dataLength={data.length}
                currentPage={currentPage}
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
