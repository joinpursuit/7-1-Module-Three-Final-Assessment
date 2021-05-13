import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
