import React from 'react';
import axios from 'axios'
class Locations extends React.Component {
    constructor(){
        super();
        this.state = {
            cities:[],
            showCity: false
        }
    }

    ghibliCities = async () =>{
        try{
       const { data } = await axios.get("https://ghibliapi.herokuapp.com/locations")
    
       this.setState({cities:data})
        } catch (e){
            console.log(e)
        }
    }

    componentDidMount(){
        this.ghibliCities()
    }
    handleClick = () =>{
        if(this.state.showCity === true){
            this.setState({showCity:false})
        }else {
            this.setState({showCity:true})
        }
    }
    render() {
        const { cities, showCity } =this.state
        let city = cities.map((ghibliaCity) => {
            return (<li key={ghibliaCity.id}>{ghibliaCity.name}</li>)
        })
        return (
            <div>
                <h2>List of Locations</h2>
                {/* <button onClick={this.handleClick}><h6>Show Locations</h6></button> */}
               {showCity ? (
                <div> 
                    <button onClick={this.handleClick}><h6>Hide Locations</h6></button>  
                    <ul>{city}</ul>
                </div>)
               : (<div>
                   <button onClick={this.handleClick}><h6>Show Locations</h6></button>
                   <ul></ul>
                   </div>)}
               
            </div>
        )
    }
}

export default Locations;