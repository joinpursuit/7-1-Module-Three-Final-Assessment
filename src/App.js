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
      <nav className="Navbar"> 
        <Link to="/" className="Link">
          <img 
          src="https://data.whicdn.com/images/118484124/original.gif" 
          alt="TOTORO!!!" 
          style={{height:"50px", width: "50px"}}/>
        </Link> {" "}
        <Link to="/movies" className="Link">Movies</Link> {" "}
        <Link to="/people" className="Link">People</Link> {" "}
        <Link to="/locations" className="Link">Locations</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/people" component={People}/>
          <Route path="/Locations" component={Locations}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;