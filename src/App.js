import "./App.css";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import People from './Components/People';
import Locations from './Components/Locations';

class App extends Component {

  render() {

    return (
      <div className='app'>
        <NavBar />
        
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to GhibliApp</h1>
          </Route>

          <Route path='/movies' component={Movies}></Route>
          <Route path='/people' component={People}></Route>
        </Switch>
      </div>
    );
  };
};

export default App;