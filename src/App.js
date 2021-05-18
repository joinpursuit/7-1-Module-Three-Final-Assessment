import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route exact path="/" className="home">
            <h1>Welcome to GhibliApp</h1>
            <img
              src="https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/1473872455712-ROBKVNERVHC9F5YCNYGD/ke17ZwdGBToddI8pDm48kNpKnNGgut7y9LeDGVifcM1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxZT4a5zZoYNrqrShEUlb9ic6pKoqwy-BHDxZXX2HTjJUmFJiwV-n4uYmWw7UAutIs/image-asset.png"
              alt="studio ghibli"
              className="image-logo"
            />
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
