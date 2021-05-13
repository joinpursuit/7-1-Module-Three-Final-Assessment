import React, { Component } from "react";
import axios from 'axios'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            menu:[],
            title: '',
            dropDate: '',
            description:''
        }
    }

    onChange = async() => {
        try {
            const { data } = await axios.get('https://ghibliapi.herokuapp.com/films')
            console.log(data)
            this.setState({
                menu: data.title
            })
        }
        catch (e) {
            console.error(e)
        }
    }
    
    
    
    componentDidMount() {
        this.onChange()
    }
  render() {
    return (
      <div>
        <h1>Select a Movie</h1>
        <select name="" id="">
                <option value="">--</option>
                {this.state.name ? (
          <>
            <div> Title:{this.state.title}</div>
            <div>Release Date:{this.state.date}</div>
            <div>Description:{this.state.description}</div>
          </>
        ) : <><br/><div>Not Found</div></>}
        </select>
      </div>
    );
  }
}
