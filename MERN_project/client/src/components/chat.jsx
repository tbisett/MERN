import React from "react";
import io from 'socket.io-client'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const socket = io("http://localhost:3000/chat");
    useEffect(() => {
        socket.on("chat_message", msg => 
            setMessages(prevMessages => {
                return [msg, ...prevMessages];
            }))
            socket.emit('chat_message', "front end check");
    }, []);



    return (
        <div>
            <h1>Message Board</h1>
            <Link to="/"><button>Home</button></Link>
            <div id='message-container'>
                <h3>{messages}</h3>
            </div>
            <form>
                <input type="text" onChange={(e) => setMessages(e.target.value)} value={messages} />
                <button type= "submit">Send</button>
            </form>
        </div>
    )


}

export default Chat;