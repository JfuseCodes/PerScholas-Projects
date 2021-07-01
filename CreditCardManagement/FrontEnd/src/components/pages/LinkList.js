import { Link } from "react-router-dom";
import LandingPage from "./landingpage/landingpage.js";
import "./linklist.css";

function LinkList() {
  return (
    <div className="ui center aligned container">
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu ">
          <Link to="/home">
            <a className="item">Home</a>
          </Link>

          <Link to="/ListPeople">
            <a className="item">View People</a>
          </Link>
          <Link to="/updateperson">
            <a className="item ">Update Information</a>
          </Link>
          <Link to="/addperson">
            <a className="item">Add new person</a>
          </Link>
          <Link to="/removeperson">
            <a className="item ">Remove person</a>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default LinkList;
// <Link to = '/remove'>
//     <a>
//         Remove Student
//     </a>
// </Link>
