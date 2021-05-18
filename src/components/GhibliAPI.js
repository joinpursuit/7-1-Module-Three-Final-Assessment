import axios from "axios";

const baseUrl = "https://ghibliapi.herokuapp.com";
const getFilms = async () => {
    const { data } = await axios(`${baseUrl}/films`);
    return data;
}
const getLocations = async () => {
    const { data } = await axios(`${baseUrl}/locations`);
    return data;
}
const getPeople = async () => {
    const { data } = await axios(`${baseUrl}/people/`);
    return data;
}

const GhibliAPI = {
    getFilms,
    getLocations,
    getPeople
}

export default GhibliAPI;