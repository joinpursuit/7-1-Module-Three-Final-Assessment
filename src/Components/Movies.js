import axios from 'axios';
import React, { Component } from 'react';

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            selectedValue: "",
            currentMovie: {},
        };
    };

    handleChange = async (e) => {
        this.setState({ 
            selectedValue: e.target.value 
        });
        const { data } = await axios.get(
            `https://ghibliapi.herokuapp.com/films/${e.target.value}`
        );
            
        this.setState({ 
            currentMovie: data 
        });
    };

    getMovies = async () => {
        const { data } = await axios.get('https://ghibliapi.herokuapp.com/films');
        this.setState({ movies: data });
    };

    componentDidMount() {
        this.getMovies();
    };

    render() {
        const { movies, selectedValue, currentMovie } = this.state;
        const options = movies.map((movie,i) => {
            return (
                <option key={i} value={movie.id}>
                    {movie.title}
                </option>
            );
        });
        
        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange} value={selectedValue}>
                    <option></option>
                    {options}
                </select>
                <h2>{currentMovie.title}</h2>
                <h2>{currentMovie.release_date}</h2>
                <h2>{currentMovie.description}</h2>
            </div>
        );
    };
};

export default Movies