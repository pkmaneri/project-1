import React from "react"

const bookList = [
    { name: "Python Basic", price: 300, qty: 5 },
    { name: "Node Js", price: 600, qty: 8 },
    { name: "Html", price: 800, qty: 9 },
    { name: "React Js", price: 400, qty: 44 },
    { name: "Css", price: 100, qty: 50 },
]

const ItemList = () => {
    return (
        <div className="container">
            <h1 align="center">Map() using multi dimension array example</h1>
            <table align="center" cellPadding="10" width="70%">
                <thead>
                    <tr bgcolor="orange">
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Price /Unit</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((bookInfo, index) => {
                        return (
                            <tr key={index} align="center">
                                <td>{index}</td>
                                <td>{bookInfo.name}</td>
                                <td>{bookInfo.price}</td>
                                <td>{bookInfo.qty}</td>
                                <td>{bookInfo.price * bookInfo.qty}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}
export default ItemList;