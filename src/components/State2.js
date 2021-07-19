import React, { Component } from "react"

export default class stateTwo extends Component {
    constructor() {
        super();
        this.state = {
            bookList: ["Java", "JavaScript", "React", "Html"],
            newBook: "",
            message: ""
        }
    }
    // pickValue=(obj)=>{
    //     this.setState({
    //         newBook:obj.target.value
    //     })

    // }
    pickValue = (e) => {
        const newBook = e.target.value;
        this.setState({ newBook })

    }


    save = () => {
        //    alert(this.state.newBook)
        this.setState({
            bookList: this.state.bookList.concat(this.state.newBook),
            message: this.state.newBook + "Book Added Successfully",
            newBook: ""
        })
    }
    handleDeleteBook = (id) => {
        // alert(id)
        this.state.bookList.splice(id, 1);//a-b
        this.setState({
            bookList: this.state.bookList,//a=a
            message: "Book Delete Successfully",

        })

    }
    render() {
        return (
            <div className="container">
                <h1 align="center"> React  Class Component Add,List ,Delete Example</h1>
                <h1 align="center">Total Book:{this.state.bookList.length}</h1>
                <p align="center">
                    Enter Book Name:<input type="text"
                        onChange={this.pickValue} value={this.state.newBook} />
                    <button onClick={this.save}>Save Book</button>
                </p>
                <p align="center">{this.state.message}</p>
                <table align="center" width="60%" cellPadding="10">
                    <thead>
                        <tr bgcolor="orange">
                            <th>SI No</th>
                            <th>Book Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {this.state.bookList.map((bookName, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index} </td>
                                    <td>{bookName} </td>
                                    <td>
                                        <button onClick={this.handleDeleteBook.bind(this, index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}