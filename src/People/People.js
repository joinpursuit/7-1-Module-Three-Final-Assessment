import axios from 'axios'
import React, { Component } from 'react'

export default class People extends Component {
    constructor(){
        super()
        this.state={
            searchperson: '',
            currentperson: {},
            namepers: '',
            isError: false

        }
    }

    handleCahnge= (e)=>{
        this.setState({
            searchperson: e.target.value
        })
    }

    handleinput = async (e)=>{
        e.preventDefault()
        const {searchperson}=this.state

        try{
            const {data} = await axios.get('https://ghibliapi.herokuapp.com/people/')
            const person = data.find((eve)=> eve.name == searchperson)
            if(person === undefined){
               this.setState({
                searchperson: '',
                currentperson: {},
                namepers: "",
                isError: true
               }) 
            }
            this.setState({
                currentperson: person,
                searchperson: '',
                namepers: person.name,
                isError: false
            })
            
        }catch (e){
            this.setState({
                currentperson: {},
                searchperson: '',
                namepers: '',
                isError: true
            })
        }
    }
    render() {
        const {currentperson,namepers, searchperson, isError} = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleinput}>
                   <input 
                   onChange={this.handleCahnge}
                   value={searchperson}
                   type="text"
                   id=""
                   placeholder="Find Your Person"></input>
                   <button>Submit</button>
                </form>
                
                    {isError ? ( <h2>Not Found!</h2> ): namepers ? (<div>

                    <p>Name: {currentperson.name}</p>
                    <p>Age: {currentperson.age}</p>
                    <p>Gender: {currentperson.gender}</p>
                    </div>): null}
                
            </div>
        )
    }
}
