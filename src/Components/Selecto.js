	
import React, { Component } from 'react';
import Select from 'react-select';
import { useState } from 'react';
import makeAnimated from 'react-select/animated';
 
const animatedComponents = makeAnimated();


 
const Countries = [
  { label: "Suhel", value:34 },
  { label: "RAju", value: 54 },
  { label: "Augustus", value: 43 },
  { label: "Getha", value: 61 },
  { label: "Sampath", value: 965 },
  { label: "Suresh", value: 46 },
  { label: "Venu", value: 58 },
  { label: "Suraj", value: 944 },
  { label: "RAjendea", value: 541 },
  { label: "Austin", value: 431 },
  { label: "Gothe", value: 611 },
  { label: "Sam", value: 9615 },
  { label: "Sanjeev", value: 461 },
  { label: "Veda", value: 581 }
];
 
  function Selecto (){
    const handleChange = (e) => {
      setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);}
    
      const [selectedValue, setSelectedValue] = useState([]);


    
  
    
      return (
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3"></div> */}
            <div className="col-md-6">
              <Select options={Countries} onChange={handleChange} value={Countries.filter(obj => selectedValue.includes(obj.label))} components={animatedComponents}
                isMulti />
            </div>
            {/* <div className="col-md-4"></div> */}
            {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
        </div>}
          </div>
        </div>
      );
    }
  


  
  export default Selecto;
