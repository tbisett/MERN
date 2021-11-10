import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Search = (props) => {
    // SETTING USE HISTORY IN A VAR FOR USE ON OUR SUBMIT
    const history = useHistory();
// PREVENT DEFAULT TO PREVENT PAGE REFRESH
// PUSH THE INFO ENTERED INTO THE FORM TO THE HISTORY STACK TO SAVE INFO, CAN ALSO REROUTE TO ANOTHER LINK IF NEEDED
    const submitForm = (event) => {
        event.preventDefault()
        history.push(`/${event.target[0].value}/${event.target[1].value}`)
    }
// SETTING STATE FOR THE INPUT NAME AND INPUT NUMBER(FROM FORM)
// DONT NEED TO DECLARE NAME ANYWHERE SINCE THE VALUE FOR THE OPTIONS ARE HARDCODED(FOR API REASONS)
// OTHEREISE WE WOULD DECLARE NAME AS THE VALUE LIKE WE DID FOR ID
    const [name, setName] = useState("");
    const [id, setId] = useState("");
// RETURNING THE FORM THAT WILL BE RENDERED ON PAGE
// SETNAME AND SET ID TO THE EVENT TARGET VALUE(WHATS ENTERED IN THE FORM)
// VALUE FOR THE OPTIONS AND INPUT IS WHAT IS PLACED IN URL(PEOPLE, PLANETS, {ID})
    return (
        <form style={{marginBottom:"1em"}} onSubmit={(e) => submitForm(e)}>
            <label>Search For: </label>
            <select style={{marginLeft: "0.5em"}}name="name" id="" onChange={(e) => setName(e.target.value)}>
                <option value="people">Person</option>
                <option value="planets">Planet</option>
            </select>
            <label style={{marginLeft: "1em", marginRight: "0.5em"}}>ID: </label>
            <input type="number" name="" id="" value={id} onChange={(e) => setId(e.target.value)} />
            <button style={{marginLeft: "1em"}}>Search</button>
        </form>
    )
}

export default Search;