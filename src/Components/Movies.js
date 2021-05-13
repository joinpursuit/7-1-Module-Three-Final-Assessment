import axios from 'axios'
import React, { Component } from 'react'

export class Movies extends Component {
    constructor(){
        super()
        this.state={
            movies: [],
            chosenTitle: '',
            releaseDate: '',
            description: ''
        }
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = async () => {
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        this.setState({
            movies: data,
        })

    }

    handleChange = (e) => {

        //condition used for if the blank option is selected
        if (e.target.value) {
            let movie = this.state.movies.filter(movie => movie.id === e.target.value)
            this.setState({
                chosenTitle: movie[0].title,
                releaseDate: movie[0].release_date,
                description: movie[0].description,
            })
        } else {
            this.setState({
                chosenTitle: '',
                releaseDate: '',
                description: '',
            })
        }
    }

    render() {
        //const {movies, chosenTitle, releaseDate, description, failedApiCall} = this.state
        const options = this.state.movies.map((movie,i) => <option key={i} value={movie.id}>{movie.title}</option>)
        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange} name='' id=''>
                    <option value=''></option>
                    {options}
                </select>
                {this.state.chosenTitle ? (
                <div>
                    <h2>Title: {this.state.chosenTitle}</h2>
                    <h2>ReleaseDate: {this.state.releaseDate}</h2>
                    <h2>Description: {this.state.description}</h2>
                </div>
                ) : null 
                }
            </div>
        )
    }
}

export default Movies