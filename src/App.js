import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Locations from "./components/Locations";
import People from "./components/People";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;