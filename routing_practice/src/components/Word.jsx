import React from "react";
import { useParams } from "react-router";

const Word = (props) => {
    const {var1} = useParams();

    return (
        <h2>The word is: {var1}</h2>
    )
}

export default Word;