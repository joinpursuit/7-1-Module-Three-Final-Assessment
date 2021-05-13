import React from 'react'
import Locations from './Locations'
import {Route} from 'react-router-dom'

export default function index() {
    return (
        <div>
            <Route path='/' component={Locations}/>
        </div>
    )
}
