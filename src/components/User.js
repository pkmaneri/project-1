import React from "react";
const myUser = ["Praveen", "Ravi", "Mehesh", "Alex"];
export default function UserList() {
    return (
        <div className="container">
            <h1> Total Users: {myUser.length}</h1>
            {myUser.map((element, index) => {
                return (
                    <p key={index}>{index}-{element}</p>
                )
            })}
        </div>
    )
}

