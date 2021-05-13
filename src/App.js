import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
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
