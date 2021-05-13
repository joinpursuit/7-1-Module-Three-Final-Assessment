import axios from 'axios'
import React, { Component } from 'react'

export default class Movies extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            movie: {}
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
        const value = e.target.value
        // const movies = movies
        console.log(e.target.value)
        this.setState({
            movie: value
        })
    }

    render() {
        const { value, movies } = this.state
        const options = movies.map((movie, i) => {
            return <option key={i} value={movie} >{movie.title}</option>
        })
        

        return (
            <div className='Movies'>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange}>
                    <option value=""></option>
                    {options}
                </select>

            </div>
        )
    }
}
