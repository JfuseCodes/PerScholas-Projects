import React from 'react';
import FetchQuote from './fetchquote'
import './dashboard.css'
const DisplayDashboard = () => {
  return(
    <div className='displaydashboard'>
      <div className='dashboard-title'><h1>STAY MOTIVATED</h1></div>
    <div className='quotecard'><FetchQuote id='quotecard'/></div>

    </div>
  )
}

export default DisplayDashboard;
