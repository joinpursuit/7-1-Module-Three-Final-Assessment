import React from 'react'
import axios from 'axios'

import MovieCard from './MovieCard'

export class Movies extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedValue:"",
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
    const options = movieList.data.map(movie => {
      return <option 
                    key={movie.id} 
                    value={movie.id}>{movie.title}
            </option>
    })
    this.setState({ options })
  }

   loadCard = async(movie) =>{
    const film = await axios.get(`https://ghibliapi.herokuapp.com/films/${movie}`)
    this.setState({
            selectedValue: movie,
            movie : film.data,
            showCard: !!movie
    })

}

  handleChange = (e) =>{
      this.loadCard(e.target.value)
  }

  render () {
    const {options, movie, showCard, selectedValue } = this.state

    return (
      <div className='centered'>
        <div>
          <span>Select a Movie</span>
          <br />
          <select 
                  name='movie-select' 
                  id='mvs' 
                  onChange={this.handleChange} 
                  value={selectedValue}>
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
