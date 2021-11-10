import React, {useState} from "react";


const DisplayBox = ({allBoxes}) => {
    return (
        <div>
            {/* {JSON.stringify(allBoxes)} */}
            <div className= "d-flex justify-content-around flex-wrap">
            {allBoxes.map((val, index) => <div key={index} style={{background: `${val.boxColor}`, height: `${val.boxDimension}px`, width: `${val.boxDimension}px`}}></div>)}
            </div>

        </div>
    )
}

export default DisplayBox;
