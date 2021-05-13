import React from 'react';
import axios from 'axios';

class People extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            people: [],
            personName: '',
            personAge: 0,
            personGender: '',
            personId: '',
            isError: false,
            dispose: '',

        }
    }

    personSearch = async () => {
        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/`)
            this.setState({ people: data })
            const newArray = data.filter((p) => {
                if (p.name === this.state.search) { return p }
            })
            if (newArray.length === 0) { this.setState({ personId: 0 }) } else {
                newArray.map((p) => { this.setState({ personId: p.id }) })
            }

            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/${this.state.personId}`)
            if (res.data.id === this.state.personId) {
                this.setState({ personName: res.data.name, personAge: res.data.age, personGender: res.data.gender, search: '', isError: false })
            }
            else {
                this.setState({ isError: true, personName: "" })
            }
        } catch (e) {
            this.setState({ pokemonName: '', isError: true, search: '' })
        }
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({ search: value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.setState({ personName: '' })
        this.personSearch()
    }



    render() {
        const { search, personName, personAge, personGender, isError } = this.state
        return (
            <div>
                <h2>Search for a Person</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={search} placeholder="Find Your Person" autoComplete="name" onChange={this.handleChange} />
                    </label>
                    <button>Submit</button>
                </form>
                {personName ? (
                    <div>
                        <h2>Name: {personName}</h2>
                        <h2>Age: {personAge}</h2>
                        <h2>Gender: {personGender}</h2>
                    </div>
                ) : null}

                {isError ? (<h2>Not Found</h2>) : null}
            </div>
        )
    }
}
export default People;