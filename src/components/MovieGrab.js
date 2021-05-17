import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      title: "",
      dropDate: "",
      description: "",
    };
  }

  filmGrab = async () => {
    try {
      const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
      this.setState({
        menu: data,
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  onChange = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );
    console.log(data)
    this.setState({
      title: data.title,
      dropDate: data.release_date,
      description: data.description
      
    })
  };

  componentDidMount() {
    this.filmGrab();
  }
  render() {
    const { menu } = this.state;
    const menuPop = menu.map((flick, i) => (
      <option key={i} value={flick.id}>
        {flick.title}
      </option>
    ));
    return (
      <div>
        <h1>Select a Movie</h1>
        <select
          onChange={this.onChange}>
          <option value="">--</option>
          {menuPop}
        </select>
        {(this.state.title) ?
          <>
            <div>Title:{this.state.title}</div>
            <div>Release Date:{this.state.dropDate}</div>
            <div>Description:{this.state.description}</div>
          </>
          : null}
      </div>
    );
  }
}
