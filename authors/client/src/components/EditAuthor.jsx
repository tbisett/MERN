import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

// EDIT FUNCTION/EVERYTHING IS IDENTICAL TO CREATE FUNCTION
// EXCEPT THE REQUEST IS PUT INSTEAD OF POST
// AND YOU NEED THE ID FROM USE PARAMS SO YOU CAN EDIT AN INDIVIDUAL AUTHOR
// HANDLER FUNCTION NAME IS CHANGED AS WELL

export default () => {
    const [Name, setName] = useState(""); 
    const [Age, setAge] = useState(""); 
    const [dbErrors, setDbErrors] = useState([]);

    let history = useHistory();
    const { id } = useParams();
    
        // useeffect to grab the single items info from db and then set it (on successful get) to the input placeholder as the already eneterd info from DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id,) 
            .then(res => {
                console.log(res.data);
                setName(res.data.Name);
                setAge(res.data.Age);
            })
            .catch(err => console.log(err))
    }, [id])
        


    //handler when the form is submitted
    const onUpdateHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a put request to edit an author
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            Name,
            Age
        })
            .then(response => {
                console.log(response)
                history.push("/")
            })
            .catch(err => {
                console.log(err);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( (errors) => errors[errors].message )
                setDbErrors(messages);
            })
            
    }
    // same rendering as create component
    return (
        <div>
            {dbErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <form onSubmit={onUpdateHandler}>
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

