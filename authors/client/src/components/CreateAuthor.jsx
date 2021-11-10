import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// CALLBACK FUNCTION TO CREATE AN AUTHOR
export default () => {
    //USESTATE HOOKS TO TRACK WHATS BEING TYPED IN TO FORM
    const [Name, setName] = useState(""); 
    const [Age, setAge] = useState(""); 
    const [dbErrors, setDbErrors] = useState([]);

    // USEHISTORY TO REDIRECT TO HOMEPAGE AFTER SUCCESSFUL COMPLETION OF FORM
    let history = useHistory();
    
    
    //HANDLER FUNCTION THAT WILL HANDLE THE SUBMISSION OF FORM
    const onSubmitHandler = e => {
        //PREVENTS DEFAULT BEHAVIOR OF SUBMIT(MAKES IT SO IT DOESNT REFRESH THE WHOLE PAGE)
        e.preventDefault();
        // POST REQUEST FOR FORM SUBMIT
        axios.post('http://localhost:8000/api/authors', {
            Name,
            Age
            })
            .then(response=> {
                console.log(response)
                history.push("/")
            })
            .catch(err=> {
                // errors have to be response instead of res becuase that how axios identifies it
                // mapping through keys of errors object to display error message
                console.log(err);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message )
                console.log(messages);
                setDbErrors(messages);
            })
                
                
            
            
    }
    // FORM/PAGE RENDERING
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