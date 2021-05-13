import axios from "axios";
import React, { Component } from "react";

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      title: "",
      releaseDate: "",
      description: "",
    };
  }

  componentDidMount() {
    this.movieList();
  }

  movieList = async () => {
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    this.setState({
      movies: data,
    });
  };

  movieInfo = (e) => {
    const { value } = e.target;
    const { movies } = this.state;

    if (value) {
      let movie = movies.filter((movie) => movie.id === value);
      this.setState({
        title: movie[0].title,
        releaseDate: movie[0].release_date,
        description: movie[0].description,
      });
    } else {
      this.setState({
        title: "",
        releaseDate: "",
        description: "",
      });
    }
  };

  render() {
    const { movies, title, releaseDate, description } = this.state;
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.movieInfo}>
          <option></option>
          {movies.map((movie, i) => (
            <option value={movie.id} key={i}>
              {movie.title}
            </option>
          ))}
        </select>
        <h1>Title: {title} </h1>
        <h2>
          Release Date: {releaseDate}
          <br />
          Description: {description}
        </h2>
      </div>
    );
  }
}

export default Movies;
