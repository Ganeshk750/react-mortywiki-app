import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  
    return (
      <ReactPaginate 
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        nextLabel="next >"
        previousLabel="< previous"
        pageclassName="page-item"
        pageLinkclassName="page-link"
        previousclassName="page-item"
        previousLinkclassName="page-link"
        nextclassName="page-item"
        nextLinkclassName="page-link"
        breakLabel="..."
        breakclassName="page-item"
        breakLinkclassName="page-link"
        containerclassName="pagination"
        activeclassName="active"
        onPageChange={(data) =>{
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
   );
};

export default Pagination;
