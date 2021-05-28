import React from 'react';
import SidebarData from './sidebardata'
import './sidebar.css'
import {Link} from 'react-router-dom';

const DisplaySidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li className="row" key={key}>
              <Link to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title"><span className='titleZindex'>{val.title}</span></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DisplaySidebar;
