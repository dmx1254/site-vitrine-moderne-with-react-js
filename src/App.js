import React from 'react';
import { Redirect, Switch, Route } from "react-router-dom"
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import  {  project1, Project2, Project3, Project4 } from './pages/Projects';

const App = () => {
  return (
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/project1" component = {project1}/>
        <Route exact path = "/project2" component = {Project2}/>
        <Route exact path = "/project3" component = {Project3}/>
        <Route exact path = "/project4" component = {Project4}/>
        <Route exact path = "/contacts" component = {Contacts}/>
        <Redirect to = "/" />
      </Switch>
  );
};

export default App;
