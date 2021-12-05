import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({ setPageNumber, setGender }) => {

  let genders = ["male", "female", "genderless", "unknow"];

    return (
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" 
      type="button" data-bs-toggle="collapse"
       data-bs-target="#collapseOne" 
       aria-expanded="false" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {genders.map((item, index) =>(
          <FilterBTN  key={index} name="gender"
          index={index}  
          item={item}
          task={setGender}
          setPageNumber={setPageNumber}
           />
        ))}
      </div>
    </div>
  </div>
    )
}

export default Gender;
