import React from "react"
const coustomer = ["Praveen", "Ravi", "Mehesh", "Alex"];
const product = ["Mango", "Apple", "Banana", "Milk", "Water"];
const MyProduct = () => {
    return (
        <div className="container">
            <table align="center" cellPadding="10">
                <thead>
                    <tr>
                        <th  bgcolor="pink"><h1>{coustomer.length}-Coustomer List</h1></th>
                        <th  bgcolor="orange"><h1>{product.length}-Product List</h1></th>
                    </tr>
                    <tr>
                        <td  bgcolor="pink">
                            {coustomer.map((name, index) => {
                                return (
                                    <p key={index}>{index}.{name}</p>
                                )
                            })}
                        </td>
                        <td bgcolor="orange">
                            {product.map((pname, index) => {
                                return (
                                    <p key={index}>{index+1}.{pname}</p>
                                )
                            })}
                        </td>

                    </tr>
                </thead>
            </table>
        </div>

    )
}
export default MyProduct;