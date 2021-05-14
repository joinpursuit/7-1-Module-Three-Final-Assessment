import { Component } from 'react';
import axios from 'axios';

class People extends Component {
    state = {
        searchPerson: '',
        person: {},
        showError: false
    }

    handleChange = (e) => {
        this.setState({
            searchPerson: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { searchPerson } = this.state
        const { data } = await axios.get(
            `https://ghibliapi.herokuapp.com/people?name=${searchPerson}`
        )
        console.log(data)
        this.setState({
            searchPerson: '',
            person: data,
            showError: false
        })

        if (data.length === 0) {
            this.setState({
                searchPerson: '',
                person: {},
                showError: true
            })
        }
    }

    render() {
        const { searchPerson, person, showError } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={searchPerson} type='text' placeholder='Find Your Person' />
                    <button type='submit'>Submit</button>
                </form>
                {showError ? (
                    <h1>Not Found</h1>) : person[0] ? (
                        <div>
                            <h2>Name: {person[0].name}</h2>
                            <h2>Age: {person[0].age}</h2>
                            <h2>Gender: {person[0].gender}</h2>
                        </div>) : null}
            </div>
        )
    }
}

export default People;