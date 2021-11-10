import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendProvider'

function AddFriendModal({ closeModal}) {
    const idRef = useRef();
    const nameRef = useRef();
    const { addFriend } = useFriends()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addFriend(idRef.current.value, nameRef.current.value)
        closeModal();
    }
    return (
        <div>
            <Modal.Header closeButton>Add Friend</Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="mt-2">Add Friend</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}

export default AddFriendModal
