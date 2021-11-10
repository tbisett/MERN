import React, { useState } from 'react';


const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxDimension, setBoxDimension] = useState("50px");
    const [colorerror, setColorError] = useState();
    const [dimensionerror, setDimensionError] = useState();
    

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {boxColor, boxDimension};
        props.addColorBox(newBox);
        console.log("New Box, Wow");
        e.target[0].value = "";

    };

    // FIRST NAME ERROR FUNCTION
    const colorError = (event) => {
        setBoxColor(event);
        if (event.length < 1) {
            setColorError()
        } else if (event.length < 2) {
            setColorError("Must be a real color")
        } else {
            setColorError(<p style={{color:"green"}}>Valid</p>)
        }
    }

    // LAST NAME ERROR FUNCTION
    const dimensionError = (event) => {
        setBoxDimension(event);
        if (event.length < 1) {
            setDimensionError()
        } else if (isNaN(event)) {
            setDimensionError("Must be a number")
        } else {
            setDimensionError(<p style={{color:"green"}}>Valid</p>)
        }
    }


    return (
        <>
            <br />
            <form onSubmit={createBox}>
                <div>
                    <label>Box Color: </label>
                    <input type="text" onChange={(e) => colorError(e.target.value)} placeholder="Box Color"/> <br />
                    {colorError ? <span style={{ color: "red" }}>{colorerror}</span> : <span>&nbsp;</span>}

                </div>
                <div>
                    <label>Box Dimension(px): </label>
                    <input type="text" onChange={(e) => dimensionError(e.target.value)} placeholder="Box Dimension" /> <br />
                    {dimensionError ? <span style={{ color: "red" }}>{dimensionerror}</span> : <span>&nbsp;</span>}
                </div>
                <input type="submit" value="Create Box" /> <br />
                <br></br>
                <div class="table_div">
                    <table class="table table-hover table-dark table-condensed .w-auto">
                        <caption>Form Info</caption>
                        <thead>
                            <tr>
                                <th scope="col">Box Color</th>
                                <th scope="col">Box Dimension</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{boxColor}</td>
                                <td>{boxDimension}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </>
    );
};

export default BoxForm;
                                
