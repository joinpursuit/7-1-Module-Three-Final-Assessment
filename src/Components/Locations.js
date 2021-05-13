import axios from 'axios';
import React, { Component } from 'react';

class Locations extends Component {
   state = {
      ghibliLoc: [],
      showLocations: false
   }

   fetchLocations = async () => {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/locations`)
      console.log(data)
      this.setState({ ghibliLoc: data})
      
   }

   componentDidMount() {
      this.fetchLocations()
   }

   handleClick = () => {
      this.setState({showLocations: !this.state.showLocations})
   }


   render() {
      const { ghibliLoc, showLocations } = this.state

      const locationGhibli = ghibliLoc.map((loc, i) => (<li key={i}>Name: {loc.name} Climate: {loc.climate} Terrain: {loc.terrain} <hr /></li>))
      return (
         <div className='ghibliLocations'>
            <h1>List of Locations</h1>
            <button onClick={this.handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>
            <ul>
               {showLocations ? locationGhibli : null}
            </ul>
         </div>
      );
   }
}

export default Locations;