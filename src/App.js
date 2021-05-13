import "./App.css";

import Movies from "./Components/Movies.js";
import People from "./Components/People.js";
import Locations from "./Components/Locations.js";
import Home from "./Components/Home.js";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="Link"> 
        <Link to="/">
          <img 
          src="https://data.whicdn.com/images/118484124/original.gif" 
          alt="Picture " 
          style={{height:"50px", width: "50px"}}/>
        </Link> {" "}
        <Link to="/movies">Movies</Link> {" "}
        <Link to="/people">People</Link> {" "}
        <Link to="/locations">Locations</Link>
      </div>
      <main>
        <Switch>
          <Route eaxct path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/people" component={People}/>
          <Route path="/Locations" component={Locations}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;