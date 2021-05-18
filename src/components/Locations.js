import React from 'react'
import axios from 'axios'

export class Locations extends React.Component {
  constructor () {
    super()
    this.state = {
      locations: [],
      showLocations: false
    }
  }

  componentDidMount () {
    this.loadLocations()
  }

  loadLocations = async () => {
    const { data } = await axios.get(
      'https://ghibliapi.herokuapp.com/locations'
    )
    this.setState({ locations : data })
  }

  handleClick = () => {
    this.setState({
      showLocations: !this.state.showLocations
    })
  }

  render () {
    const { showLocations, locations } = this.state
    const listLocations = locations.map(place => {
      return <li key={place.id}>{place.name}</li>
    })
    return (
      <div className='centered'>
        <span>List of Locations</span>
        <br />
        <button onClick={this.handleClick}>
          {showLocations ? 'Hide' : 'Show'} Locations
        </button>
        <br />
        <ul>{showLocations && listLocations}</ul>
      </div>
    )
  }
}

export default Locations
