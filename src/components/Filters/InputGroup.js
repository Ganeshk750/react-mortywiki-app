import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    return (
        <div className="input-group mb-3">
          <select
            onChange={(e) => setId(e.target.value)}
            className="form-select"
            id={name}
          >
            <option value="1">Choose...</option>
            {[...Array(total).keys()].map((ele, index) => {
              return (
                <option value={ele + 1}>
                  {name} - {ele + 1}
                </option>
              );
            })}
          </select>
        </div>
      );
}

export default InputGroup
