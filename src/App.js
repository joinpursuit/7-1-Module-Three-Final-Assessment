
import "./App.css";
import NavBar from "./Component/NavBar";
import {Switch, Route } from "react-router-dom";
import Movies from "./Component/Movies";
import People from "./Component/People";
import Locations from "./Component/Locations"

function App() {
  return (
    <div className ="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
          <h1>Welcome to GhibliApp</h1>
            </Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/people" component={People}></Route>
            <Route path="/locations" component={Locations}></Route>
          </Switch>
        
        
        </main>
    </div>
  )
}

export default App