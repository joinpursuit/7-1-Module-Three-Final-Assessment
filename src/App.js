import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route exact path="/" className="home">
            <h1>Welcome to GhibliApp</h1>
          </Route>
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
