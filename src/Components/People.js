import React, { Component } from 'react'
import axios from 'axios'

class People extends Component {
	state = {
			searchPerson: '',
			currentPerson: {},
			personData: '',
			isError: false,
		}
	

	handleChange = async (e) => {
		this.setState({
			searchPerson: e.target.value,
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		const { searchPerson } = this.state
		try {
			const { data } = await axios.get('https://ghibliapi.herokuapp.com/people')
			const charInfo = data.find((el) => el.name === searchPerson)
			if (charInfo === undefined) {
				this.setState({
					searchPerson: '',
					currentPerson: {},
					personData: '',
					isError: true,
				})
			}
			this.setState({
				searchPerson: '',
				currentPerson: charInfo,
				personData: charInfo.name,
				isError: false,
			})
		} catch (e) {
			this.setState({
				searchPerson: '',
				currentPerson: {},
				personData: '',
				isError: true,
			})
		}
	}

	render() {
		const { searchPerson, currentPerson, personData, isError } = this.state
		return (
			<div>
				<h1>Search for a Person</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						value={searchPerson}
						type='text'
						placeholder='Find Your Person'
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				{isError ? (
					<h1>Not Found</h1>
				) : personData ? (
					<div>
						<h4>Name: <i>{currentPerson.name}</i></h4>
						<h4>Age: <i>{currentPerson.age}</i></h4>
						<h4>Gender: <i>{currentPerson.gender}</i></h4>
					</div>
				) : null}
			</div>
		)
	}
}

export default People
