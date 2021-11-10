import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [Name, setName] = useState(""); 
    const [Age, setAge] = useState(""); 
    const [dbErrors, setDbErrors] = useState([]);

    let history = useHistory();
    
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/authors', {
            Name,
            Age
            })
            .then(response=> {
                console.log(response)
                history.push("/")
            })
            .catch(err=> {
                // errrors have to be response instead of res becuase that how axios identifies it
                console.log(err);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message )
                console.log(messages);
                setDbErrors(messages);
            })
                
                
            
            
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <h1>Create Author</h1>
            {dbErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={Name}/>
                </p>
                <p>
                    <label>Age</label><br/>
                    <input type="number" onChange={(e)=>setAge(e.target.value)} value={Age}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}