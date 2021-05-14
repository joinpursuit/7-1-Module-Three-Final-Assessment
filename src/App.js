import NavBar from "./Components/NavBar";
import Movies from './Components/Movies';
import Locations from './Components/Locations';
import People from './Components/People';
import { Switch, Route } from 'react-router-dom';
// import PeopleTwo from './PeopleTwo';
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <h1>Welcome to GhibliApp</h1>
        </Route>
        <Route path={'/movies'} component={Movies} />
        <Route path={'/locations'} component={Locations} />
        <Route path={'/people'} component={People} />
        {/* <Route path={'/people'} component={People} /> */}
      </Switch>


    </div>
  );
}

export default App;