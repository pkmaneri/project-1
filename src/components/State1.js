import React, { Component } from "react"

export default class StateOne extends Component {
    state = {
        fullName: "",
    }
    // peakValue = (e) => {
    //     alert("e.target.value")
    //     const fullName=e.target.value;
    //     this.setState({
    //         fullName
    //     })
    // }
    peakValue = (abc) => {
        // alert("e.target.value")
        this.setState({
            fullName:abc.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <h1 align="center"> React  Js,Event onchange + setState() in state management</h1>
                <p align="center">
                    Enter Your Name:<input type="text" name="xyz" onChange={this.peakValue}></input>
                </p>
                <p  align="center">
                    Your Name is :{this.state.fullName}
                </p>
            </div>
        )
    }

}
// setState is finish and render function is call
// event based two way winding=onchange event
// send and recived  two way winding
