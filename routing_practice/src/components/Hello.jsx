import React from "react";
import { useParams } from "react-router";

const Hello = (props) => {
    const {var1, var3, var4} = useParams();
    
    const divStyle = {
        backgroundColor: var4
    }
    const wordColor = {
        color: var3
    }

    return (
        <div style={divStyle}>
            <h2 style={wordColor}>The word is: {var1}</h2>
        </div>
    )
}


export default Hello;