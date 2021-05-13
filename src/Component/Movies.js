import React from "react";
import axios from 'axios';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            title: '',
            currentTitle: {}
        }
    }

    BerrieRequest = async () => {
        try {
            const { data } = await axios.get("https://ghibliapi.herokuapp.com/films/")
            this.setState({ name: data })
        } catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.BerrieRequest();
    }

    handleChange = async (e) => {
        const { value } = e.target
        this.setState({ title: value });
        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)

            this.setState({ currentTitle: data })
        } catch (e) { console.log(e) }
    }



    render() {
        const { name, title, currentTitle } = this.state;
        const options = name.map((movie) => {
            return <option key={movie.id} value={movie.id}>{movie.title}</option>
        })
        return (
            <div>
                <h1>Select a Movie</h1>
                <select
                    value={title}
                    onChange={this.handleChange}>
                    <option value="">--Please choose an option--</option>
                    {options}

                </select>
                {title ? (
                    <div>
                        <h2>Title: {currentTitle.title}</h2>
                        <h2>Release Date: {currentTitle.release_date}</h2>
                        <h2>Description: {currentTitle.description}</h2>
                    </div>) : null}
            </div>
        )
    };
}

export default Movies;