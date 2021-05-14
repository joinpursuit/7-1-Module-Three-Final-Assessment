import React, { Component } from 'react';
import GhibliAPI from "./GhibliAPI";
import "./Movies.css";

export default class Movies extends Component {
    constructor() {
        super();
        this.state = { movieList: [], selected: "" };
    }
    selectChange = (e) => {
        this.setState({ selected: e.target.value });
    }
    async componentDidMount() {
        const movieList = await GhibliAPI.getFilms();
        this.setState({ movieList });
    }
    render() {
        const { movieList, selected } = this.state;
        const optionList = movieList.map((movie, i) => <option key={i} value={i}>{movie.title}</option>);
        const movie = movieList[selected]
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={this.selectChange} value={selected}>
                    <option defaultValue value="">&nbsp;</option>
                    {optionList}
                </select>
                {!movie ? null : (<>
                    <h2>Title: {movie.title}</h2>
                    <h3>Release Date: {movie.release_date}</h3>
                    <h4>Description: {movie.description}</h4>
                </>)}
            </div>
        )
    }
}
