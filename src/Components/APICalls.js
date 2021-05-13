import axios from "axios";

// For Movies.js

const getAllMovies = async () => {
    try{
        return await axios.get("https://ghibliapi.herokuapp.com/films");
    }catch(e){
        alert(`Error occured: ${e.message}`)
    }
}


const getMovieByID = async (movieID) => {
    try{
        return await axios.get(`https://ghibliapi.herokuapp.com/films/${movieID}`);
    }catch(e){
        alert(`Error occured: ${e.message}`)
    }    
}

//For People.js

const getPeople = async () => {
    try{
        return await axios.get(`https://ghibliapi.herokuapp.com/people`);
    }catch(e){
        alert(`Error occured: ${e.message}`)    
    }
}






//For Locations.js


const getLocations = async () => {
    try{
        return await axios.get("https://ghibliapi.herokuapp.com/locations");
    }catch(e){
        alert(`Error occured: ${e.message}`)
    }
}


const APICalls = {
    // For Movies.js
    getAllMovies,
    getMovieByID,

    // For People.js
    getPeople,

    // For Locations.js
    getLocations

}

export default APICalls;