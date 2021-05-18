import React from 'react'
import Movies from './Movies'
import {Route} from 'react-router-dom'

export default function index() {
    return (
        <div>
            <Route path='/' component={Movies}/>
        </div>
    )
}
