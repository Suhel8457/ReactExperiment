import React, { useState } from 'react'
import moment from 'moment';
import './Slots.css'

const Slots = () => {
  let intime = "12:00 Pm"
  let outtime = "2:00 Pm"
  const [result, setResult] = useState([])
  console.log("Array", result)

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(120, 'minutes');
      }
    }


    return result;
  }

  intervals(intime, outtime);
  return (
    <div className='slots' >
      {
        result && result.length > 0 ? result.map((time, index) => {
          return (
            <div key={index}>
              <p className='alert alert-warning'>{time}</p>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Slots