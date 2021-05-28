import React from "react";
import faker from 'faker';
import Avatar from "./avatar";
import DisplayDate from "./displaydate";
import './header.css'

const DisplayNavbar = () => {
  return (
    <div className='header-container'>
      <DisplayDate />
      <Avatar
        photo={faker.image.avatar()}
        fName = {faker.name.firstName()}
        lName = {faker.name.lastName()} />
    </div>

  );
};

export default DisplayNavbar;
