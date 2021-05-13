import "./App.css";
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import People from "./components/People"
import Locations from "./components/Locations"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
        <Navbar />
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
  );
}

export default App;