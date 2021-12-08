import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  let updateDimension = () =>{
     setWidth(window.innerWidth);
     return () => window.removeEventListener("resize", updateDimension);
  }
    return (
      <>
      <style jsx>
      {`
        @media (max-width: 768px) {
          .pagination {
            font-size: 12px;
          }
          .next,
          .prev {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .pagination {
            font-size: 14px;
          }
        }
      `}
    </style>
      <ReactPaginate 
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        nextLabel="next >"
        previousLabel="< previous"
        pageclassName="page-item"
        pageLinkclassName="page-link"
        previousclassName="page-item next"
        previousLinkclassName="page-link"
        nextclassName="page-item"
        nextLinkclassName="page-link prev"
        breakLabel="..."
        breakclassName="page-item"
        breakLinkclassName="page-link"
        containerclassName="pagination"
        activeclassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data) =>{
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
   );
};

export default Pagination;
