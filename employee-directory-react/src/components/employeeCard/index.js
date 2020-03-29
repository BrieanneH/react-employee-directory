import React from 'react'
import "../style.css"



function employeeCard(props){
    const { username } = props
    return (

        <div className ="card">
            <div className ="content">
                <ul>
                    {username(user =>
                        <li key ={user.id}>
                            <div>
                                Name: {user.name}
                                Age: {user.age}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default employeeCard;