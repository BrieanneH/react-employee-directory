import React { Component } from "react";
import Continer from "../components/Container";
import api from "./api";

class Table extends Component {

    state= {
        results: []
    }

    ComponentDidMount(){
        api.search()
        .then(res=> {
            console.log(res);
            this.setState({
                reults: res.data.results
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state);
        return (

            <Container>
                <div className="mt-4">
                    <h1>List of Employees</h1><button className="btn btn-scucess" type="submit">
                        generate.
                    </button>
                </div>
                <thead>
                    <tr>
                        <th scope="col"> Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope= "col">Phone Numer.</th>
                    </tr>
                </thead>

                <tbody>

                    {this.state.results.map(result =>(
                        <tr>
                            <th scope="col">{results.name}</th>
                            <td>{results.age}</td>
                            <td>{results.email}</td>
                            <td>{results.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Container>
        )
    }

}
export default Table;