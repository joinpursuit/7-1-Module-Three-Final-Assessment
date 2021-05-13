
import React, { Component } from 'react'
import axios from 'axios'

export default class Movies extends Component {
    constructor(){
        super()
        this.state={
            search: '',
            movies: {},
            listMovies: []
            
        }
    }
     handleSubmit= async(e)=>{   
          this.setState({
            search: e.target.value
        })
       
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films${e.target.value}`)
        this.setState({
             movies: data
        })
     }
     getMovies = async ()=>{
         const {data} =await axios.get('https://ghibliapi.herokuapp.com/films/')
        
         this.setState ({
            listMovies: data
      })
      
    }
    componentDidMount(){
        this.getMovies()
    }
    render() {
        const {listMovies, search, movies}= this.state
        const list = listMovies.map((movie, i)=>{
            return (
            <option key={i} value={movie.id}>
                {movie.title}
            </option>
        )} )
        return (
            <div>
                <h1>Select a Movie</h1>
                <select onChange={this.handleSubmit} value={search}>
                    <option></option>
                    {list}   
                </select> 
                <div>
                    <p>Name: {movies.title}</p>
                    <p>Date: {movies.release_date}</p>
                    <p>Description: {movies.description}</p>
                </div>
            </div>
        )
    }
}
