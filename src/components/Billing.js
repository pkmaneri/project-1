import React, { Component } from "react"

export default class Billing extends Component {
   constructor(){
       super();
       alert("1")
   }
    render() {
        alert("2")
        return (
            <div className="container">
                <h1 align="center">Welcome Class Component</h1>
            </div>
        )
    }
}
