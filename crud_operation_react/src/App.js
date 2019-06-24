import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateComponent from './components/create.component';
import HomeComponent from './components/home.component';
import NavbarComponent from './components/navbar.component';


class App extends Component {
  render(){
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/create' component={CreateComponent} />
      </Switch>
    </Router>
  );
}
}

export default App;
