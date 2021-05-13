import axios from "axios";
import React, { Component } from "react";
import "./Movies.css";

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      failedApiCall: false,
      selectedTitle: "",
      selectedRelease: "",
      selectedDescription: "",
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      this.setState({
        movies: data,
        failedApiCall: false,
      });
    } catch {
      this.setState({
        failedApiCall: true,
      });
    }
  };

  chooseMovie = (e) => {
    const { value } = e.target;
    const { movies } = this.state;

    if (value) {
      let movie = movies.filter((movie) => movie.id === value);
      this.setState({
        selectedTitle: movie[0].title,
        selectedRelease: movie[0].release_date,
        selectedDescription: movie[0].description,
      });
    } else {
      this.setState({
        selectedTitle: "",
        selectedRelease: "",
        selectedDescription: "",
      });
    }
  };

  render() {
    const { movies, selectedTitle, selectedRelease, selectedDescription, failedApiCall } = this.state;
    const options = movies.map((movie, i) => ( 
    <option key={i} value={movie.id}>
        {movie.title}
      </option>
    ));
    
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.chooseMovie}>
          <option></option>
          {options}
        </select>
        {selectedTitle ? (
          <>
            <h1>{selectedTitle}</h1>
            <h2>{selectedRelease}</h2>
            <p>{selectedDescription}</p>
          </>
        ) : null}
        {failedApiCall ? (
          <h1>We've hit a snag! Refresh and try again or come back later!</h1>
        ) : null}
      </div>
    );
  }
}

export default Movies;
