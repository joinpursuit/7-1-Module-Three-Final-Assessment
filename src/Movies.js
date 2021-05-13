import React, { Component } from "react";
import axios from "axios";

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedValue: "",
      show: false,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    let { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
    this.setState({
      movies: data,
    });
  };

  handleChange = (e) => {
    if (e.target.value === "") {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        selectedValue: e.target.value,
        show: true,
      });
    }
  };

  render() {
    const { selectedValue, movies, show } = this.state;
    const options = movies.map((elem, i) => {
      return (
        <option key={i} value={elem.title}>
          {elem.title}
        </option>
      );
    });
    const movie = (data) => {
      let film = data.find((elem) => elem.title === selectedValue);
      return (
        <div className="movie">
          <h4>Title: {film.title}</h4>
          <h4>Release Date: {film.release_date}</h4>
          <h4>Description: {film.description}</h4>
        </div>
      );
    };
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select
          onChange={this.handleChange}
          value={selectedValue}
          name=""
          id=""
        >
          <option value=""> </option>
          {options}
        </select>
        {show ? movie(movies) : ""}
      </div>
    );
  }
}

export default Movies;
