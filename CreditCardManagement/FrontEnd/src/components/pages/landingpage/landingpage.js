import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className=" ui center aligned container home-body-container">
      <div className="heading-container">
      <div className="center">
        <h1 className="heading">CREDIT CARD MANAGEMENT</h1>
        <h2 className= "sub-heading ">Repair your credit</h2>
        <div className="button-sz">
          <button className="ui right labeled blue icon button ">
            Get Started
            <i className="right chevron icon"></i>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
