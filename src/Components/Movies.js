import React, { Component } from "react";
import APICalls from "./APICalls";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedValue: "",
      currentMovie: {},
    };
  }


  handleChange = async (e) => {
    const {movies} = this.state;
    this.setState({
        selectedValue: e.target.value,
    });

    let movieID = "";

    movies.forEach((movie) => {
        if(e.target.value === movie.title){
            movieID = movie.id
        }
    })


    APICalls.getMovieByID(movieID).then(response => {
        this.setState({
          currentMovie: response.data,
        });

    })
  };





  componentDidMount() {
    APICalls.getAllMovies().then(response => {
        this.setState({ movies: response.data });
    });
  }



  render() {
    const { movies, selectedValue, currentMovie } = this.state;
    
    const options = movies.map((movie, i) => {
      return (
        <option key={i} value={movie.title}>
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
        <h2>Title: {currentMovie.title}</h2>
        <h2>Release Date: {currentMovie.release_date}</h2>
        <h2>Description: {currentMovie.description}</h2>
      </div>
    );
  }
}

export default Movies;
