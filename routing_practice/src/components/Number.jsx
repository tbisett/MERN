import React from "react";
import { useParams } from "react-router-dom";

const Number = (props) => {
    const { var1 } = useParams();

    return (
        <div>
            {isNaN(var1) ? <h2>the word is {var1}</h2> : <h2>The number is {var1}</h2>}
            
        </div>
    )
}

export default Number;