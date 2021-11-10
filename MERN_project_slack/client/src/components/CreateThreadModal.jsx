import React, { useState } from 'react'
import { Modal, Form, Button, FormCheck } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendProvider'
import { useThreads } from '../contexts/ThreadProvider'



function CreateThreadModal({ closeModal }) {
    const [selectedFriendIds, setSelectedFriendIds] = useState([]);
    const { friends } = useFriends();
    const { createThread } = useThreads();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        createThread(selectedFriendIds)
        closeModal()
    }


    const checkboxChangeHandler = (friendId) => {
        setSelectedFriendIds(prevSelectedFriendIds => {
            if(prevSelectedFriendIds.includes(friendId)) {
                return prevSelectedFriendIds.filter(prevId => {
                    return friendId !== prevId
                })
            } else {
                return [...prevSelectedFriendIds, friendId]
            }
        })
    }

    return (
        <div>
            <Modal.Header closeButton>Create Thread</Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmitHandler}>
                    {/* USING PARENTHESIS INSTEAD OF CURLY BRACES AFTER FAT ARROW
                    ALLOWS US TO AUTOMATICALLY RETURN WHATS INSIDE THE PARETHESIS
                    INSTEAD OF USING TRADITIONAL RETURN NOTATION */}
                    {friends.map(friend => (
                        <Form.Group controlId={friend.id} key={friend.id}>
                            <FormCheck type="checkbox" value={selectedFriendIds.includes(friend.id)} 
                            label={friend.name} onChange={ () => checkboxChangeHandler(friend.id) }  >

                            </FormCheck>
                        </Form.Group>
                    ))}
                    <Button type="submit" className="mt-2">Create Thread</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}

export default CreateThreadModal
