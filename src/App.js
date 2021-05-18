import { Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import People from './components/People'
import Locations from './components/Locations'

export class App extends React.Component {
  render () {
    return (
      <>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/people'>
              <People />
            </Route>
            <Route path='/locations'>
              <Locations />
            </Route>
          </Switch>
        </main>
      </>
    )
  }
}

export default App
