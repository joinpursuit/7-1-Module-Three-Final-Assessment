import "./App.css";
import {Route, Link, Switch} from 'react-router-dom'
import Movies from "./Movies"
import People from "./People"
import Locations from "./Locations"

function App() {
  return (
    <div className="app">
      <main>
        <header className='header'>
          <Link to="/"> <img src="https://www.nicepng.com/png/detail/875-8758012_dog-movie-sunglass-popcorn-movietheater-movietime-red-chien.png" className="dog" alt="My Dog"/></Link>
          <Link to="/movies">Movies</Link>
          <Link to='/people'>People</Link>
          <Link to='/locations'>Locations</Link>
        </header>
       
        <Switch>
          <Route exact path="/"> <h1>Welcome to GhibliApp</h1></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/people" component={People}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;