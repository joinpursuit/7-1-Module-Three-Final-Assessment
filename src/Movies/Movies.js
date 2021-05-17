import axios from "axios";
import React, { Component } from "react";

export class Movies extends Component {
  constructor() {
    super();

    this.state = {
      options: [],
      selected: "",
      movie: {},
    };
  }

  handleChange = async (e) => {
    this.setState({ selected: e.target.value });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );
    this.setState({ movie: data });
  };

  getMovies = async () => {
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    this.setState({ options: data });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { options, selected, movie } = this.state;
    const optionsList = options.map((option, i) => {
      return (
        <option key={i} value={option.id}>
          {option.title}
        </option>
      );
    });

    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange} value={selected}>
          <option></option>
          {optionsList}
        </select>
        <h1>{movie.title}</h1>
        <h1>{movie.description}</h1>
      </div>
    );
  }
}

export default Movies;
