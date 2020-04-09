import React from "react";
import Contaainer from "../components/Container";
import Col from "../compnonents/Col";
import Row from "../components/ Row";

const Directory = ()=> {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return(
        <div>
            <div className  = "mt-3">
                <h2>Add an Employeee</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-2 px-4">
                    <Row className ="form-group">
                        <Col size = "12">
                            <input 
                            className="form-control"
                             type="text"
                              placeholder="First Name."
                            name="firstname"
                             />
                            

                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name."
                                name="lastname"
                            />

                        </Col>

                    </Row>

                    <button className="btn btn-success" type="submit">
                        Submit.
                    </button>

                </Container>
            </form>
        </div>
    )
}

export default Directory;