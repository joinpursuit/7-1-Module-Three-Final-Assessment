import axios from 'axios'
import React, { Component } from 'react'

export class Movies extends Component {
    constructor(){
        super()

        this.state ={
            films: [],
            selectedFilm: {},
            value: ""
        }
    }

    componentDidMount () {
        this.getFilms()
    }

    getFilms = async () => {
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        // console.log(data)
        this.setState({
            films: data,
        })
    }

    handleChange = async (event) => {
        // console.log(event.target.value)
        this.setState({
            value: event.target.value,
        })

        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
        // console.log(data)

        this.setState({
            selectedFilm: data,
        })
       
    }

    render() {
        const {films, selectedFilm, value} = this.state;
        // console.log(films)

        const options = films.map((film,i) => 
            <option value={film.id} key={i}>{film.title}</option>)
        // console.log(options)

        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange} className="Select">
                    <option></option>
                    {options}
                </select>

                <div>
                    {value ? <h3>Title: {selectedFilm.title}</h3> : null}
                    {value ? <h3>Release Date: {selectedFilm.release_date}</h3> : null}
                    {value ? <h3>Description: {selectedFilm.description}</h3>: null}
                </div>
            </div>
        )
    }
}

export default Movies
