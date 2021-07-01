import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import LinkList from './components/pages/LinkList.js';
import ListPeople from './components/ListPeople.js';
import CreatePerson from './components/CreatePerson.js';
import UpdatePerson from './components/UpdatePerson.js';
import RemovePerson from './components/RemovePerson.js';
import LandingPage from './components/pages/landingpage/landingpage.js';
import './App.css';

function App(){
  // <Route path="/home" exact component= {LinkList}></Route>
  return(
    <div>
      <Router>
        <LinkList/>
        <Switch>

          <Route path='/home' exact component={LandingPage}></Route>
          <Route path="/listpeople"component={ListPeople}></Route>
          <Route path="/addperson" component={CreatePerson}></Route>
          <Route path = "/updateperson" component = {UpdatePerson}></Route>
          <Route path = "/removeperson" component = {RemovePerson}></Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
