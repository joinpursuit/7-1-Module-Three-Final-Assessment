import axios from "axios";
import React, { Component } from "react";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {},
    };
  }
  handleChange = async (e) => {
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );
    console.log(data);
    this.setState({ currentMovie: data });
  };
  getMovies = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log(data);
    this.setState({ movies: data });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, currentMovie } = this.state;
    const options = movies.map((movie) => (
      <option key={movie.id} value={movie.id}>
        {movie.title}
      </option>
    ));

    return (
      <>
        <div>
          <h1 style={{color:"ivory"}}>Select a Movie</h1>
          <select onChange={this.handleChange}>
            <option value="">Please Select a Movie</option>
            {options}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-around",
            color: "ivory",
          }}
        >
          <h3>{currentMovie.title}</h3>
          <p>{currentMovie.release_date}</p>
          <h3>{currentMovie.description}</h3>
        </div>
      </>
    );
  }
}
