import React, { Component } from 'react'
import axios from 'axios'

export class Locations extends Component {
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
    const locationList = await axios.get(
      'https://ghibliapi.herokuapp.com/locations'
    )
    const locations = locationList.data.map((place, i) => {
      return <li key={i}>{place.name}</li>
    })
    this.setState({ locations })
  }

  handleClick = () => {
    this.setState({
      showLocations: !this.state.showLocations
    })
  }

  render () {
    const { showLocations, locations } = this.state
    return (
      <div className='centered'>
        <span>List of Locations</span>
        <br />
        <button onClick={this.handleClick}>
          {showLocations ? 'Hide Locations' : 'Show Locations'}
        </button>
        <br />
        <ul>{showLocations ? locations : ''}</ul>
      </div>
    )
  }
}

export default Locations
