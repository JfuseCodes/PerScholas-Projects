import React from "react";
import ExerciseData from "./exerciseData";
import './exercise.css'
const DisplayExercise = () => {

  const randomNum = () => {
    let i=100;

    return Math.floor(Math.random(i)*10+10)

  }

  return (

    <div className="displayexercise">
      <div className='title-container'><div className='title'>WORKOUT OF THE DAY</div></div>
      <div className="exercise-container">

        {ExerciseData.map( (val, key) => {
          return (

            <div>

              <ul>
                <li className="listItem" key={key}>
                  <div className='ui card content content-container'>
                    <img className = 'imageDisplay'src={val.image}/>
                    <span>
                      Exercise {val.exercise}
                      <h3 className='exerciseName'>{val.title}</h3>
                    </span>
                    <span className='meta'>
                      5 sets {randomNum()} repetitions
                    </span>

                  </div>
                </li>
              </ul>
            </div>
        );
    })}
  </div>
</div>
  );
};

export default DisplayExercise;
