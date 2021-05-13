import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"><h1>Welcome to GhibliApp</h1></Route>
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
        
      </main>
    </div>
  );
}

export default App;