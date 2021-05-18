import React from 'react'
import People from './People'
import {Route} from 'react-router-dom'

export default function index() {
    return (
        <div>
            <Route path='/' component={People}/>
        </div>
    )
}
