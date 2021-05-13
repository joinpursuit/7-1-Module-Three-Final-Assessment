import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to GhibliApp</h1>
        </Route>
        <Route path="/movies" component={Movies}/>
        <Route path="/people" component={People}/>
        <Route path="/locations" component={Locations}/>
      </Switch>
    </div>
  );
}

export default App;
