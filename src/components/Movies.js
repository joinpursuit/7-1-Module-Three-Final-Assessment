import axios from 'axios'
import React, { Component } from 'react'

export default class Movies extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            movie: {},
            currentIndex: ''
        }
    }

    componentDidMount() {
        this.getMovies()
    }
    getMovies = async () => {
        const movies = await axios.get('https://ghibliapi.herokuapp.com/films')
        .then(response => response.data)
        console.log(movies)
        this.setState({
            movies
        })
    }
    handleChange = (e) => { // Why can't I set state.movie to the movie object stored in select options?
        const movies = this.state.movies
        const currentMovie = movies[e.target.value]
        this.setState({
            movie: currentMovie
        })
        console.log(currentMovie)
    }

    render() {
        const { value, movies, movie } = this.state
        const options = movies.map((movie, i) => {
            return <option key={i} value={i} >{movie.title}</option>
        })
        

        return (
            <div className='Movies'>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange}>
                    <option value=""></option>
                    {options}   
                </select>
                {movie.title ? <h3>{movie.title}</h3> : null}
                {movie.release_date ? <h3>{movie.release_date}</h3> : null}
                {movie.description ? <p>{movie.description}</p> : null}

            </div>
        )
    }
}
