import "./App.css";
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import People from './People';
import Locations from './Locations'


function App() {
  return (
      <div className="app">
    <nav>
      <Link to ="/" >
    <img  src="https://cdn.dribbble.com/users/2264632/screenshots/6708631/final.gif" alt='logo'/>
  

     </Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/people'>People</Link>
      <Link to='/locations'>Locations</Link>
    </nav>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/movies' component={Movies}/>
    <Route path="/people" component={People} />
    <Route path='/locations' component={Locations}/>
    </Switch>
    </div>
  );
}

export default App;