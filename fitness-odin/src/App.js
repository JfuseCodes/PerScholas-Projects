import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import DisplaySidebar from './components/Sidebar/displaysidebar'
import DisplayDashboard from './components/pages/dashboard/displayDashboard'
import DisplaySchedule from './components/pages/schedule/displayschedule'
import DisplayExercise from './components/pages/exercises/displayExercise'
import DisplayNavbar from './components/pages/header/displaynavbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <DisplayNavbar />
      <DisplaySidebar/>
      <Switch>
        <Route path='/' exact component={DisplayDashboard}/>
        <Route path='/schedule' component={DisplaySchedule}/>
        <Route path='/exercises' component={DisplayExercise}/>
      </Switch>
    </Router>
  );
}

export default App;
