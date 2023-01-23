import React, { useState } from "react";
import items from "./Items";

function Pagination(){
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);



  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
    
      <div>
        {currentItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={(event) => handleClick(event, pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
        }

export default Pagination;
