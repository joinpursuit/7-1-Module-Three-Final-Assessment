import "./App.css";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import {Switch, Route} from "react-router-dom";

function App() {
  const homeStyle = {
    backgroundColor: "#FF7F51",
    height:"1000px"
}
  return (
    <div className="App" style={homeStyle}>
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