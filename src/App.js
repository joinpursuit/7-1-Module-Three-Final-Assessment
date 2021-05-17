import { Switch, Link, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import People from "./People/People";
import Locations from "./Locations/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">
          <img
            style={{ height: "50px", width: "50px" }}
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
            }
            alt="studioGhibli"
          ></img>
        </Link>{" "}
        <Link to="/movies">Movies</Link> <Link to="/people">People</Link>{" "}
        <Link to="/locations">Locations</Link>
      </nav>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Welcome to GhibliApp</h1>}
          ></Route>
          <Route path="/locations" component={Locations}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/people" component={People}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
