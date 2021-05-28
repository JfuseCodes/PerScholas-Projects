import React, { useState } from "react";
import './input.css'

const Input = (props) => {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState('');

  const handleAddItem = () => {
    const newList = [...list, {title: inputData }];
    setList(newList);
    setInputData('');
    console.log(list);
  };

  const handleRemoveItem = index => {
    const newList = [];
    for(let i=0 ; i < list.length; i++){
      if(index != i) {
        newList.push(list[i]);
      }
    }
    setList(newList);
  }
  return (
    <div className='ui action input return-container'>
      <input
        className='custom-input'
        placeholder="Whats next on your agenda?"
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}></input>
      <input type="button" className='ui icon button cart plus icon'value="+" onClick={ () => handleAddItem()} />

      <div>
        {list.map((item, index) => {
          return(
            <div class='ul action input'>
              <p className='list-item'onClick={()=>handleRemoveItem(index)}>{item.title}<button className='ui icon button cart plus icon'>Remove</button></p>
            </div>);

        })}
      </div>
    </div>
  );
};

export default Input;
