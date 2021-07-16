import React, { Component } from "react"

export default class Billing extends Component {
    constructor() {
        super();
        this.state =
        {
            counter: 5,
            message: "???????"
        }

    }
    one = () => {
        // alert("from one")
        // this.state.counter = this.state.counter + 5;
        // console.log(this.state.counter);

        this.setState({
            counter: this.state.counter + 5,
            message:'The click To +By 5'
            // a=a+b
        })
    }
    
    two = () => {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        alert("update")
        return (
            <div className="container">
                <h1 align="center"> React setState() in state management</h1>
                <h2 align="center">{this.state.counter}</h2>
                <p align="center">
                    <button onClick={this.one}>Click To + state value By 5</button>
                    <button onClick={this.two}>Click To - state value By 5</button>
                </p>
                <p align="center">{this.state.message}
                </p>
            </div>
        )
    }
}
//render function is life cycle method.
// can input and output
// set state change a value of state variable
