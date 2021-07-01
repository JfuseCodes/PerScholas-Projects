import React,{Component} from "react";
import axios from "axios";

import './databasecss/update.css';

class UpdatePerson extends Component{
    constructor(props)
    {
        super(props)
        this.state= {
            id:'',
            name:'',
            creditScore: '',
            salary:'',
            month:'',
            day:'',
            year:'',
            update:'',
            updated:[],
        }
        this.handleChangeUpdate = this.handleChangeUpdate.bind(this)
        this.update= this.update.bind(this)

    }

    handleChangeUpdate(event)
    {
        let changeIt= event.target.name
        let value = event.target.value
        this.setState({[changeIt]:value})
    }

    update(){
        axios.put(`http://localhost:8080/creditsystem/person/${this.state.id}`,
        {

            name:this.state.name,
            creditScore: this.state.creditScore,
            salary:this.state.salary,
            month:this.state.month,
            day:this.state.day,
            year:this.state.year,

        })

        .then((res) => {
            this.setState({update: res.data})
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => {
            this.setState({updated:"Person id." + this.state.id + " not in system"})
        })
    }

    render (){
        return(
        <div className='page-padding ui container'>
            <div className='checker'>

                    <div className='checker1.5'>
                        <h2 className='ui center aligned container'>Update</h2>
                        <form className='ui form'>
                            <div className='fields'>
                              <div className='four wide field'>
                                  <label><span className='label-color'>ID</span></label>
                                  <input value={this.state.id} name="id" onChange={this.handleChangeUpdate} className="updateThisId" text="text" placeholder="Enter id"></input>
                              </div>
                              <div className='eight wide field'>
                                  <label><span className='label-color'>Full Name </span></label>
                                  <input value={this.state.name} name="name" onChange={this.handleChangeUpdate} className="updateName" text="text" placeholder="Enter full name"></input>
                              </div>

                            </div>
                            <div className = 'fields'>

                              <div className='four wide field'>
                                  <label><span className='label-color'>Credit Score</span></label>
                                  <input value={this.state.creditScore} name="creditScore" onChange={this.handleChangeUpdate} className="updateGrade" text="text" placeholder="Enter persons new credit score"></input>
                              </div>

                              <div className=' four wide field'>
                                  <label><span className='label-color'>Salary</span></label>
                                  <input value={this.state.salary} name="salary" onChange={this.handleChangeUpdate} className="updateAge" text="text" placeholder="Enter salary"></input>
                              </div>
                            </div>
                            <div className='fields'>
                              <div className='two wide field'>
                                  <label><span className='label-color'>Month</span></label>
                                  <input value={this.state.month} name="month" onChange={this.handleChangeUpdate} className="updateAge" text="text" placeholder="Enter month"></input>
                              </div>
                              <div className='two wide field'>
                                  <label><span className='label-color'>Day</span></label>
                                  <input value={this.state.day} name="day" onChange={this.handleChangeUpdate} className="updateAge" text="text" placeholder="Enter day"></input>
                              </div>
                              <div className='two wide field'>
                                  <label><span className='label-color'>Year</span></label>
                                  <input value={this.state.year} name="year" onChange={this.handleChangeUpdate} className="updateAge" text="text" placeholder="Enter year"></input>
                              </div>
                            </div>
                            <div>
                              <button className="ui submit button "onClick = {this.update}>Update</button>
                            </div>

                        </form>

                    </div>


            </div>
            <div className="table-padding">
                <table className="ui table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Credit Score</th>
                            <th>Salary</th>
                            <th>DUE DATE</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.update.id}</td>
                            <td>{this.state.update.name}</td>
                            <td>{this.state.update.creditScore}</td>
                            <td>{this.state.update.salary}</td>
                            <td>{this.state.update.month}{this.state.update.day}{this.state.update.year}</td>

                        </tr>
                    </tbody>
                </table>
              </div>
        </div>
        )
    }
}

export default UpdatePerson;
