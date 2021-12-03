import React from 'react'

const Pagination = ({ setPageNumber, pageNumber }) => {

    let next = () => {
        setPageNumber((preValue) => preValue + 1);
    };

    let prev = () => {
        if(pageNumber === 1) return;
       setPageNumber((preValue) => preValue - 1);
    };
 
    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={ prev } className="btn btn-primary">Prev</button>
            <button onClick={ next } className="btn btn-primary">Next</button>
        </div>
    )
}

export default Pagination;
