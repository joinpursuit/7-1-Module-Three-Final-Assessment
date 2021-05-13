import './App.css'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import Movies from './Components/Movies'
import People from './Components/People'
import Locations from './Components/Locations'

function App() {
	return (
		<div className='app'>
					<NavBar />
			<Switch>
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/movies'} component={Movies}/>
      <Route path={'/people'} component={People} />
      <Route path={'/locations'} component={Locations}/>
			</Switch>
		</div>
	)
}

export default App
