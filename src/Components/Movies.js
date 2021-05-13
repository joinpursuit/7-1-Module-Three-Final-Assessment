import axios from 'axios'
import React, { Component } from 'react'

export class Movies extends Component {
    constructor(){
        super()

        this.state ={
            films: [],
            title: "",
            release: "",
            description: "",
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
        try {
            const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
            // console.log(data.name)

            this.setState({
                title: data.title,
            })
        } catch (error) {
            
        }
    }

    render() {
        const {films} = this.state;
        // console.log(films)
        const options = films.map(film => <option value={film.title} key={film.title}>{film.title}</option>)
        console.log(options)
        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleChange} className="Select">
                    <option></option>
                    {options}
                </select>

                <h2>Title: {} </h2>
            </div>
        )
    }
}

export default Movies
