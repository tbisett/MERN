import React from 'react'
import { useFriends } from '../contexts/FriendProvider'
import { ListGroup } from 'react-bootstrap'

function Friends() {
    const { friends } = useFriends()
    return (
        // "flush" gets rid of the left and right borders that come with list group
        // since we already have a border made for the friends and threads tabs
        <ListGroup variant = "flush">
            {friends.map(friend => (
                <ListGroup.Item key={friend.id}>
                    {friend.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Friends
