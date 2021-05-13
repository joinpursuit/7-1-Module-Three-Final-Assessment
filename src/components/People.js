import React from 'react'
import axios from 'axios'

import Person from './Person'

export class People extends React.Component {
    constructor(){
        super()
        this.state={
            person: '',
            personInfo:[],
            loadData: false

        }
    }

    personName = (e) =>{
        this.setState({person: e.target.value})
    }

    handleSearch= async() =>{
        const {person} = this.state
        try{
            const info = await axios.get(`https://ghibliapi.herokuapp.com/people?name=${person.trim()}`)
            const personInfo = info.data
            this.setState({
                person: '',
                personInfo: personInfo,
                loadData: true
            })
        }catch(err){
            // In case of a Different error
            this.setState({
                personInfo: [],
                loadData: false
            })
        }
       
    }

    render() {
        const { personInfo, loadData } = this.state
        return (
            <div className = 'centered'>
                <span>Search for a Person</span>
                <br />
                <input type='text' placeholder='Find Your Person' onChange={this.personName} value={this.state.person}/>
                <br />
                <button onClick={this.handleSearch}>Submit</button>
                <br />
                {loadData && <Person personInfo={personInfo} />}
            </div>
        )
    }
}

export default People
