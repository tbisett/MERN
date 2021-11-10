import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as v4uuid } from 'uuid';

function Login({ onIdSubmission }) {
    const idRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onIdSubmission(idRef.current.value);
    }

    const createId = () => {
        onIdSubmission(v4uuid());
    }

    return (
        <Container className="align-items-center d-flex" style={{height: "100vh"}}>
            <Form onSubmit={onSubmitHandler} className="w-100">
                <Form.Group className="mb-2">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" style={{marginRight: "0.75em"}}>Login</Button>
                <Button onClick={createId} variant="secondary">Create a new ID</Button>
            </Form>
        </Container>
            
        
    )
}

export default Login
