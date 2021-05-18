import "./App.css";
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import Movies from './components/Movies'
import People from './components/People'
import Locations from './components/Locations'


import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <NavBar />
        <main>
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/people' component={People} />
          <Route path='/locations' component={Locations} />
          <Route path='/'> <h1>Welcome to GhibliApp</h1> </Route>
        </Switch>
        </main>
      </div>
    )
  }
}
