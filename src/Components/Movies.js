import React, { Component } from 'react'
import axios from "axios";

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            Gmovies: [], //this represents the array of movies that are objects
            pickMovie: "", //this represents a single movie
            currentMovie: {},
        }
    }

    handleChange = async (e) => {
        // console.log(e.target.title)
        this.setState({pickMovie: e.target.value})
        const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
        console.log(e.target)
        this.setState({currentMovie: data})
    }

    getMovies = async () => {
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/films")
        this.setState({ Gmovies: data})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { Gmovies, pickMovie, currentMovie } = this.state
        const options = Gmovies.map((Gmovie, i) => {
        return <option value={Gmovie.id} key={i}>{Gmovie.title}</option>
        })
        return (
            <div>
                <h1>Select a Movie</h1>
                <form onSubmit={this.handleSubmit}> 
                <select onChange={this.handleChange} value={pickMovie}>
                    <option></option>
                    {options}
                </select>
                    <h1>{currentMovie ? currentMovie.title : null}</h1>
                    <h1>{currentMovie.description}</h1>

                </form>
                
            </div>
        )
    }
}
