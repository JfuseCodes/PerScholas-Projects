import React from 'react';


const Avatar = props => {
  return (
          <div className='avatar-container'>
          <img className="ui tiny circular image avatar-custom" src={props.photo} />
          <span className='avatar-name'><p>{props.fName} {props.lName}</p></span>
          </div>
  );

}

export default Avatar;
