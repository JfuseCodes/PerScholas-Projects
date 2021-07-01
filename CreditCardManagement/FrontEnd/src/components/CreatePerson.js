import React from "react";
import axios from "axios";

import './databasecss/addperson.css'

class CreatePerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      creditScore: "",
      salary: "",
      month:"",
      day:"",
      year:"",
      person: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewPerson = this.addNewPerson.bind(this);


  }

  handleChange = e => {
    let addNew = e.target.name;
    let value = e.target.value;
    this.setState({ [addNew]:value });
  }

  addNewPerson = () => {
    axios
      .post(`http://localhost:8080/creditsystem/addperson`, this.state)
      .then( (response) => {
        this.setState( { person: response.data });
        console.log(response);
        console.log(response.data);
      });
  }

  goBack = () => this.props.history.push('/linklist');

  view = () => this.props.history.push('/listpeople');


  render() {
    return (
      <div className = 'page-padding ui container'>
        <div>
            <h2 className='ui center aligned container'>Client Sign up</h2>

          <form className='ui form'>
              <div className='fields'>
                <div className='eight wide field'>
                  <span>Full Name</span>
                  <input name="name" onChange={this.handleChange} text="text" placeholder="Enter full name"></input>
                </div>

                <div className='four wide field'>
                  <span>Credit Score</span>
                  <input name="creditScore" onChange={this.handleChange} text="text" placeholder="Enter credit score"></input>
                </div>

                <div className='four wide field'>
                  <span>Salary </span>
                  <input
                    name="salary"
                    onChange={this.handleChange}
                    text="text"
                    placeholder="Enter salary"
                  ></input>
                </div>
              </div>



              <div className='fields'>
                <div className='four wide field'>
                  <span>Month </span>
                  <input
                    name="month"
                    onChange={this.handleChange}
                    text="text"
                    placeholder="Enter Month"
                  ></input></div>
                <div className='four wide field'>
                  <span>Day</span>
                  <input
                    name="day"
                    onChange={this.handleChange}
                    text="text"
                    placeholder="Enter day"
                  ></input></div>
                <div className='four wide field'>
                  <span>Year</span>
                  <input
                    name="year"
                    onChange={this.handleChange}
                    text="text"
                    placeholder="Enteryear"
                  ></input>
                </div>
              </div>

              <div>
                <button className="ui submit button"type="submit" onClick={this.addNewPerson}>
                  Add Person
                </button>
              </div>
          </form>

        </div>

        <div className="table-padding">
        <table className="ui table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Credit Score</th>
              <th>Salary</th>
              <th>Due</th>


            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.person.id}</td>
              <td>{this.state.person.name}</td>
              <td>{this.state.person.creditScore}</td>
              <td>{this.state.person.salary}</td>
              <td>{this.state.person.month}{this.state.person.day}{this.state.person.year}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default CreatePerson;
