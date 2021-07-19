import React, { Component } from "react"

export default class Praveen extends Component {
    state = {
        bookList: [{bookName:"Css",bookPrice:500,qun:5},
        {bookName:"Html",bookPrice:400,qun:3},
        {bookName:"Java",bookPrice:600,qun:6},
        {bookName:"React",bookPrice:700,qun:5}],
        bookName: "",
        bookPrice: "",
        qun: ""

    };
    handleChange = (e) => {
        const prevBook = JSON.parse(JSON.stringify(this.state));
        prevBook[e.target.name] = e.target.value;
        this.setState(prevBook)

    }
    handleSave = () => {
        const book = {
            bookName: this.state.bookName,
            bookPrice: this.state.bookPrice,
            qun: this.state.qun
        }
        var temp = this.state.bookList;
        temp.push(book)
        this.setState({
            bookList: temp
        })
    }
    handleDelete = (id) => {
        this.state.bookList.splice(id, 1);
        this.setState({
            bookList: this.state.bookList
        })

    }
    render() {
        return (
            <div className="container">
                <h1 align="center">Book Details</h1>
                <p align="center">Enter Book Name:<input onChange={this.handleChange}
                    value={this.state.bookName} name="bookName" ></input>
                    Enter Book Price:<input onChange={this.handleChange}
                        value={this.state.bookPrice} name="bookPrice" ></input>
                    Enter Book Quantity:<input onChange={this.handleChange}
                        value={this.state.qun} name="qun"></input>

                    <button onClick={this.handleSave}>Save</button>
                </p>
                <table align="center" width="80%" cellPadding="10">
                    <thead align="center">
                        <tr bgcolor="green">
                            <th>Sr-No</th>
                            <th>BookName</th>
                            <th>BookPrice</th>
                            <th>quentity</th>
                            <th>TotalAmount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {this.state.bookList.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.bookPrice}</td>
                                    <td>{book.qun}</td>
                                    <td>{book.qun * book.bookPrice}</td>
                                    <td>
                                        <button onClick={this.handleDelete.bind(this, index)}>Delete</button>
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