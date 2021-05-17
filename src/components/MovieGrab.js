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

    
  
  
  
  
  
  
  
  
  filmGrab = async () => {
        try {
            const { data } = await axios.get('https://ghibliapi.herokuapp.com/films')
            this.setState({
                menu: data
            })
          console.log(data)
        }
        catch (e) {
            console.error(e)
        }
    }
    
    componentDidMount() {
        this.filmGrab()
    }
  render() {
    const { menu } = this.state
    const menuPop = menu.map((flick, i) => <option key={i} value={flick.id}>{flick.title }</option>)
    return (
      <div>
        <h1>Select a Movie</h1>
        <select name="" id="">
          <option value=""></option>
          {menuPop}
        </select>
      </div>
    );
  }
}
