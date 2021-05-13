import React from "react";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Nav from "./components/Nav";
import Home from './components/Home'
import Movies from './components/MovieGrab'
import People from './components/People'
import Locations from './components/Locations'

import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav key={uuidv4()} />
      <main>
        <Switch>

          <Route exact path='/'>
            <Home key={uuidv4()}/>
          </Route>
          <Route path='/movies'>
            <Movies key={uuidv4()}/>
          </Route>
          <Route path='/people'>
            <People key={uuidv4()}/>
          </Route>
          <Route path='/locations'>
            <Locations key={uuidv4()}/>
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
