import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedValue: "",
      currentMovie: {},
    };
  }
  getMovies = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
    //console.log(data)
    this.setState({
      movies: data,
    });
  };
  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );

    this.setState({
      currentMovie: data,
    });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, selectedValue, currentMovie } = this.state;
    const options = movies.map((movie, i) => {
      return (
        <option key={i} value={movie.id}>
          {movie.title}
        </option>
      );
    });
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select
          onChange={this.handleChange}
          value={selectedValue}
          name=""
          id=""
        >
          <option value=""></option>
          {options}
        </select>

        <div className="moviecard">
          {currentMovie.title ? (
            <div>
              <h3>Title: {currentMovie.title}</h3>
              <h3>
                Release Date:{" "}
                {currentMovie.title ? currentMovie.release_date : null}{" "}
              </h3>
              <h3>
                Description:{" "}
                {currentMovie.title ? currentMovie.description : null}{" "}
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
