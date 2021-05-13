import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: "",
      isError: false,
      movieInfo: {},
    };
  }

  getMovies = async () => {
    try {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
    this.setState({
      movies: data,
      isError: false,
    });
  } catch {
      this.setState({
          isError: true,
      })
  }
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange = async (e) => {
    this.setState({
      selectedMovie: e.target.value
    });
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}/`
    );
    this.setState({
      movieInfo: data,
    });
    console.log(data)

  };

  render() {
    const { movies, selectedMovie, movieInfo } = this.state;
    const options = movies.map((movie) => (
      <option value={movie.title} key={movie.id}>
        {movie.title}
      </option>
    ));

    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange} value={selectedMovie}>
          <option></option>
          {options}
        </select>
        <h1>{selectedMovie}</h1>
        <h2>{}</h2>
      </div>
    );
  }
}