import React, { Component } from "react"

class Employee extends Component {
    constructor() {
        super();
        // alert("1")
        this.state = {
            name: "Praveen",
            city: "Banagalore",
            user: ["Praveen", "Ravi", "Mehesh", "Alex"],
            book: ["Java", "html", "css", "React"]
        }
    }
    render() {
        //  alert("2")
        return (
            <div className="container">
                <h1 align="center">Welcome Class Component</h1>
                <p>Full Name:{this.state.name}</p>
                <p>City Name:{this.state.city}</p>
                <h3>Total Users:{this.state.user.length}</h3>
                {this.state.user.map((userName, index) => {
                    return (
                        <label key={index}>{userName},</label>
                    )

                })}
                <hr color="orange" size ="5"/>
                <h3>Total Boooks:{this.state.book.length}</h3>
                {this.state.book.map((bookName, index) => {
                    return (
                        <label key={index}>{bookName},</label>
                    )

                })}


            </div>
        )
    }
}
export default Employee;
// every activity control by state management.