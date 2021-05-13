import React, { Component } from 'react'
import axios from 'axios'

export class Movies extends Component {
constructor() {
    super();
    this.state= {
        movies: [],
        selectedValue: '',
        currmovie: {}
    }
}

handleChange = async(e) => {
    this.setState({
        selectedValue: e.target.value
    })
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`);

    this.setState({
        currmovie: data
    })
}

getMovies = async () => {
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`)
    this.setState({ movies: data })
}

componentDidMount() {
    this.getMovies()
}


    render() {
        const { movies, currmovie, selectedValue } = this.state
        const options = movies.map(( movie, i ) => {
            return <option
            key={i}
            value={movie.id}>
                {movie.title}

            </option>
        })
        return (
            <div>
                <h1>Select a Movie</h1>
                <select
                onChange={this.handleChange}
                name=""
                id=""
                value={selectedValue}>
                    <option></option>
                    {options}
                </select>
                <h2>Title: {currmovie.title ? currmovie.title: null}</h2>
                <h2>Release Date: {currmovie.release_date ? currmovie.release_date:null}</h2>
                <h2>Description: {currmovie.description}</h2>
                
            </div>
        )
    }
}

export default Movies
