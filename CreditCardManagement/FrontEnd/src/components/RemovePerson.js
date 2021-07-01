import React from "react";
import axios from "axios";
import './databasecss/removeperson.css'

class RemovePerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteId: "",
      removed: "",
    };

    this.handleRemoveChange = this.handleRemoveChange.bind(this);
    this.remove = this.remove.bind(this);
  }
  handleRemoveChange = (e) => {
    let removeId = e.target.name,
      value = e.target.value;
    this.setState({ [removeId]: value });
  };

  remove() {
    axios
      .delete(
        `http://localhost:8080/creditsystem/person/${this.state.deleteId}`
      )
      .then((res) => {
        this.setState({ removed: res.data });
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        this.setState({
          removed: "Person id:" + this.state.deleteId + " is not in system",
        });
        console.log("Person id:" + this.state.deleteId + " is not in system");
      });



  }


  render() {
    return (
      <div className='page-padding ui container'>
        <div>
          <h2 className='ui center aligned container'>Remove</h2>



    <form className='ui form form-padding'>
            <div className='fields form-input1'>
              <div className='person-id field'>
                <span>Person Id</span>
                <input
                  text="text"
                  name="deleteId"
                  placeholder="Enter id"
                  value={this.state.deleteId}
                  onChange={this.handleRemoveChange}
                ></input>
              </div>
            </div>
            <div className='ui fields container'>
              <div className='field button-container'>
                <button className='ui submit button' onClick={this.remove}>
                  Remove Person
                </button>{" "}
                <br />

              </div>
            </div>
          </form>
        </div>
        {this.state.removed}
      </div>
    );
  }
}

export default RemovePerson;
