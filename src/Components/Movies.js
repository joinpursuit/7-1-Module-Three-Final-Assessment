import axios from 'axios';
import React, { Component } from 'react';
import './Movies.css'

class Movies extends Component {
   state = {
      movies: [],
      selectedMovie: '',
      currentMovie: {}

   }

   fetchMovies = async () => {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      this.setState({movies: data})
      console.log(data)
   }

   
   handleChange = async (e) => {
      this.setState({ selectedMovie: e.target.value})
      console.log(e.target.data)
      try {
         const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
         console.log(data)
         
         this.setState({currentMovie: data })
      } catch (error) {
         this.setState({selectedMovie: '', currentMovie: {}})
      }
   }
   
   componentDidMount() {
      this.fetchMovies()
   }
   render() {
      const { movies, selectedMovie, currentMovie } = this.state
      const allMovies = movies.map(film => { return <option key={film.title} value={film.id}>{film.title}</option>})
      return (
			<div className='movies'>
				<h1>Select a Movie</h1>
				<select onChange={this.handleChange} value={selectedMovie} name='' id=''>
					<option value=''></option>
					{allMovies}
				</select>
					<div className='filmData'>
						<h2>Title: {currentMovie.title}</h2>
						<h3>Release Date: {currentMovie.title ? currentMovie.release_date: null}</h3>
						<h3>Description: {currentMovie.title ? currentMovie.description : null}</h3>
					</div>
			</div>
		)
   }
}

export default Movies;