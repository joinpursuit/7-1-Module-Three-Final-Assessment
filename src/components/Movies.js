import React from 'react'
import axios from 'axios'

import MovieCard from './MovieCard'

export class Movies extends React.Component {
  constructor () {
    super()
    this.state = {
      options: [],
      movie :{},
      showCard: false
    }
  }

  componentDidMount () {
    this.loadMovies()
  }

  loadMovies = async () => {
    const movieList = await axios.get('https://ghibliapi.herokuapp.com/films')
    const options = movieList.data.map((movie, i) => {
      return <option key={i} value={movie.id}>{movie.title}</option>
    })
    this.setState({ options })
  }

   loadCard = async(movie) =>{
    const film = await axios.get(`https://ghibliapi.herokuapp.com/films/${movie}`)
    this.setState({
            movie : film.data,
            showCard: (!movie) ? false : true
    })

}

  handleChange = (e) =>{
      e.preventDefault()
      const movie = e.target.value
      this.loadCard(movie)
  }

  render () {
    const {options, movie, showCard } = this.state

    return (
      <div className='centered'>
        <div>
          <span>Select a Movie</span>
          <br />
          <select name='movie-select' id='mvs' onChange={this.handleChange}>
            <option></option>
            {options}
          </select>
          <br />
          {movie && <MovieCard movie={movie} showCard={showCard}/>}
        </div>
      </div>
    )
  }
}

export default Movies
