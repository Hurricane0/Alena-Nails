import React from "react";
import { useState } from "react";

const Paginator = ({
  currentPage,
  pageSize = 20,
  dataLength,
  onPageChanged,
  portionSize = 7
}) => {
  const pagesCount = Math.ceil(dataLength / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  let [currentPortionNumber, setCurrentPortionNumber] = useState(1);
  let leftPortionPageNumber = (currentPortionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = currentPortionNumber * portionSize;

  return (
    <div className={"pagesNumbersBlock"}>
      {currentPortionNumber > 1 && (
        <button
          onClick={() => setCurrentPortionNumber(currentPortionNumber - 1)}
        >{`<`}</button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map(page => {
          return (
            <span
              key={page}
              className={currentPage === page ? "selectedPage" : undefined}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {currentPortionNumber < portionCount && (
        <button
          onClick={() => setCurrentPortionNumber(currentPortionNumber + 1)}
        >
          {`>`}
        </button>
      )}
    </div>
  );
};

export default Paginator;
