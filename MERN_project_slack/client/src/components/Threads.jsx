import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useThreads } from '../contexts/ThreadProvider'

function Threads() {
    const { threads, selectThreadIndex } = useThreads();
    return (
        // "flush" gets rid of the left and right borders that come with list group
        // since we already have a border made for the friends and threads tabs
        <ListGroup variant = "flush">
            {threads.map((thread, index) => (
                <ListGroup.Item key={index} action active={thread.selected}
                onClick={ () => selectThreadIndex(index)}>
                    {thread.recipients.map(recipient => recipient.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Threads
