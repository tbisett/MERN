import React from "react";
import { useEffect, useState } from "react";
import io from 'socket.io-client'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import socketClient from 'socket.io-client';
import App from '../App'

const HomePage = (props) => {
    const [socket] = useState(() => io(':8000'));
    // const { SERVER } = SERVER;
    // const socketConnect = socketClient(SERVER);
    const[name, setName] = useState("");
    const[dbErrors, setDbErrors] = useState([]);
    const [users, setUsers] = useState('');

    // socketConnect.on('connection', () => {
    //     console.log('im connected w/ backend');
    // })

    let history = useHistory();

    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        console.log('Is this running?');
        socket.on('Welcome', data => console.log(data));

        // note that we're returning a callback function
        // this ensures that the underlying socket will be closed if App is unmounted
        // this would be more critical if we were creating the socket in a subcomponent
        return () => socket.disconnect(true);
    }, []);

    

    useEffect( () => {
        axios.get('http://localhost:8000/api/users')
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch(err => console.log(err))
    }, []);    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', {
            name,
        })
        .then(response => {
            console.log(response)
            history.push('/chat')
        }) 
        .catch(err => {
            console.log(err);
            const {errors} = err.response.data;
            const messages = Object.keys(errors).map( error => errors[error].message);
            setDbErrors(messages);
        })
        
    }

    return (
        <div>
            {/* <h1>Colloquium 🖥 </h1> */}
            <div>
                <h2>Get Started Now!</h2>
                <p>I'll start chatting as...</p>
                {dbErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                <form onSubmit={onSubmitHandler}>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                    <button>Begin!</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;