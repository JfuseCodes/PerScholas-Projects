import React from "react";
import './header.css';
const date = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  if (mm == 5) {
    mm = "May";
  }
  if (mm == 6) {
    mm = "June";
  }
  let yyyy = today.getFullYear();
  return "Today, " + dd + "th " + mm + ", " + yyyy;
};
const DisplayDate = () => {
  return (
    <div className='date-container'>
      <div className='date'>
        {date()}
      </div>
    </div>
  );
};

export default DisplayDate;
