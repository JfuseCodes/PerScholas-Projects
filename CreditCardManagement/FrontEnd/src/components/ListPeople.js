
import React, { useState, useEffect } from 'react';
import PersonService from "../services/PersonService";


import './databasecss/view.css';

const ListPeople = (props) => {

  const [personData, setPersonData] = useState([]);

  useEffect(() => {

    PersonService.getPeople().then((dataset) =>
      setPersonData(dataset.data)
    );

  }, []);
  console.log(personData);

  const goBack = () => this.props.history.push('/linklist');





  return (
    <div className = 'ui container '>

      <table className='ui table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CREDIT SCORE</th>
            <th>SALARY</th>
            <th>CREDIT CARD</th>
            <th>CURRENT BALANCE</th>
            <th>MINIMUM DUE</th>
            <th>Due Date</th>


          </tr>
        </thead>
        <tbody>
          {personData.map((val) => {
            return (

              <tr id={val.id} key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.creditScore}</td>
                <td>{val.salary}</td>
                <td>{val.cardNumber}</td>
                <td>${val.currentBalance}</td>
                <td>${val.amountDue}</td>
                <td>{val.month}/{val.day}/{val.year}</td>

              </tr>
            );
          })


        }
        </tbody>
      </table>

    </div>
  );
};

export default ListPeople;
