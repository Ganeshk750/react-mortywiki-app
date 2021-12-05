import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = () => {

    let species = ["Human", "Alien", "Humanoid", "Poopybutthone",
    "Mythological","Unknown", "Animal", "Disease","Robot", "Cronenberg",
    "planet"];

    return (
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         {species.map((item,index) => (
           <FilterBTN  name="species" 
           key={index}
           index={index}
           item={item}/>
         ))}
      </div>
    </div>
  </div>
    )
}

export default Species
