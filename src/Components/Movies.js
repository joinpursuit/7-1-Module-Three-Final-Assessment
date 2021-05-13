import { Component } from 'react';
import axios from 'axios'

class Movies extends Component {
    state = {
        movies: [],
        selectedMovie: '',
        movie: {}
    }

    getMovies = async () => {
        try {
            const { data } = await axios.get(
                'https://ghibliapi.herokuapp.com/films'
            )
            this.setState({
                movies: data
            })
        } catch (error) {
            this.setState({
                movies: []
            })
        }
    }


    chosenMovie = async (e) => {
        this.setState({
            selectedMovie: e.target.value
        })

        try {
            const { data } = await axios.get(
                `https://ghibliapi.herokuapp.com/films/${e.target.value}`
            )
            this.setState({
                movie: data,
            })

        } catch (error) {
            this.setState({
                selectedMovie: '',
                movie: {}
            })
        }
    }

    componentDidMount() {
        this.getMovies()
    }
    render() {
        const { movies, selectedMovie, movie } = this.state
        const MovieList = movies.map(movie => <option value={movie.id} key={movie.id}>{movie.title}</option>)
        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.chosenMovie} value={selectedMovie}>
                    <option value=''></option>
                    {MovieList}
                </select>

                <section>
                    <h1>Title: {movie.title}</h1>
                    <h3>Release Date: {movie.release_date}</h3>
                    <p>Description: {movie.description}</p>
                </section>
            </div>
        )
    }
}

export default Movies;