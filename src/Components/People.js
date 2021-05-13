import { Component } from 'react';
import axios from 'axios';

class People extends Component {
    state = {
        searchPerson: '',
        currentPerson: {},
        personInfo: '',
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
        try {
            const { data } = await axios.get(
                'https://ghibliapi.herokuapp.com/people'
            )
            console.log(data)
            const findPerson = data.find((person) => person.name === searchPerson)
            if (findPerson === undefined) {
                this.setState({
                    searchPerson: '',
                    currentPerson: {},
                    personInfo: '',
                    showError: true
                })
            } else {
                this.setState({
                    searchPerson: '',
                    currentPerson: findPerson,
                    personInfo: findPerson.name,
                    showError: false
                })
            }

        } catch (error) {
            this.setState({
                searchPerson: '',
                currentPerson: {},
                personInfo: '',
                showError: true
            })
        }
    }

    render() {
        const { searchPerson, currentPerson, personInfo, showError } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={searchPerson} type='text' placeholder='Find Your Person' />
                    <button type='submit'>Submit</button>
                </form>
                {personInfo ? (<div>
                    <h1>Name: {currentPerson.name}</h1>
                    <h2>Age: {currentPerson.age}</h2>
                    <h2>Gender: {currentPerson.gender}</h2>
                </div>) : null}
                {showError ? <h1>Not Found</h1> : null}
            </div>
        )
    }
}

export default People;