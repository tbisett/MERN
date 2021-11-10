import React, { useState } from 'react'
import { Form, FormGroup, InputGroup, Button } from 'react-bootstrap'
import { useThreads } from '../contexts/ThreadProvider';

export default function OpenThread() {
    const [text, setText] = useState("");
    const { sendMessage, selectedThread } = useThreads();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        sendMessage(selectedThread.recipients.map(recipient => recipient.id), text)
        setText('')
    }



    return (
        // d-flex makes it a flex box, flex column makes it so the messages will stack top to bottom,
        // flex grow make it take up max height and width
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                <div className="h-100 d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedThread.messages.map((message, index) => {
                        return (
                            <div key={index} className={`my-1 d-flex flex-column${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                                <div className="rounded px-2 py-1">{message.text}</div>
                                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName} </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Form onSubmit={onSubmitHandler}>
                <FormGroup className='m-2'>
                    {/* input group so our send button is attatched to the input */}
                    <InputGroup>
                        <Form.Control as="textarea" required value={text}
                        onChange={ e => setText(e.target.value)} style={{ height: '150px', resize: 'none'}} />
                        <InputGroup.Append>
                        <Button type="submit" style={{height: "150px"}}>Send Message</Button>                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
            </Form>
        </div>
    )
}
                    
