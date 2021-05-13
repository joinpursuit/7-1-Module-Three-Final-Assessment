import React, { Component } from 'react';
import axios from 'axios';

class People extends Component {
    constructor() {
        super()
        this.state = {
            textInput: '',
        };
    };

    handleChange = (e) => {
        this.setState({ textInput: e.target.value });
    };

    render() {
        const { textInput } = this.state;

        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text' 
                        placeholder='Find Your Person'
                        onChange={this.handleChange}
                        value={textInput}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default People;