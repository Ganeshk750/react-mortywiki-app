import React from 'react'

const FilterBTN = ({name, index, item}) => {
    return (
        <div>
        <div class="form-check">
        <input className="form-check-input" type="radio" 
        name={name}
        id={`${name}-${index}`}
         />
        <label className="btn btn-outline-primary" 
        for={`${name}-${index}`}>
          {item}
        </label>
      </div>
      </div>
    )
}

export default FilterBTN;
 