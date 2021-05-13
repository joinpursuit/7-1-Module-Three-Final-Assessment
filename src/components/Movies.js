import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isError: false,
      title: "",
      release: "",
      description: "",
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
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { movies } = this.state;

    if (value) {
      let movie = movies.filter((movie) => movie.title === value)
      console.log(value)
      this.setState({
        title: movie[0].title,
        release: movie[0].release_date,
        description: movie[0].description,
      });
    } else {
      this.setState({
        title: "",
        release: "",
        description: "",
      });
    }
  };

  movieOutput;

  render() {
    const { movies, title, release, description } = this.state;
    const options = movies.map((movie) => (
      <option value={movie.title} key={movie.id}>
        {movie.title}
      </option>
    ));

    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange}>
          <option></option>
          {options}
        </select>
        {title ? (
          <div>
            <h1>{title}</h1>
            <h2>{release}</h2>
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
