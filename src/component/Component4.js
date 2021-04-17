import React, { Component } from 'react'

export default class Component4 extends Component {
    state = {
        nama : 'fikri',
        umur : 22,
    }

    render() {
        return (
            <div>
                <p>state</p>
                <h3>Nama : {this.state.nama}</h3>
                <p>Semester :  {this.state.umur} </p>
            
                <p>=========================================</p>
            </div>
        )
    }
}
