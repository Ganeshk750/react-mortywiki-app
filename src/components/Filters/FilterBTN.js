import React from 'react'

const FilterBTN = () => {
    return (
        <div>
        <div class="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
        <label class="btn btn-outline-primary" for="flexRadioDisabled">
          Single toggel
        </label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" />
        <label className="form-check-label" for="flexRadioCheckedDisabled">
          Disabled checked radio
        </label>
        </div>
      </div>
    )
}

export default FilterBTN;
 