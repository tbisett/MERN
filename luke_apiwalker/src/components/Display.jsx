import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const DisplayInfo = (props) => {
// DESTRUCTURE NAME AND ID AND SETTING IT TO USEPARAMS(TO USE IN URL)
// SET TEMP VAR TO HOLD NAME AND ID. WHEN NEW ROUTE IS CALLED, THE TEMP (NAME AND ID)VALUES WILL CHANGE, TRIGGERING THE USEEFFECT
    const {name, id} = useParams();
    const temp = name + id;
// WE PUT THE API CALL FUNCTION IN USEEFFECT SO THE CALL ISNT MADE BEFORE THE PAGE HAS TIME TO RENDER
    useEffect(() => {starWarsApi()}, [temp])
    // USE STATES FOR THE API CALL
    const[person, setPerson] = useState([]);
    const[planet, setPlanet] = useState([]);
    const[notFound, setNotFound] = useState(false);
// API FUNCTION THAT GETS THE API URL WITH OUR VAR NAMES. IF NAME INPUT IS EQUAL TO "PERSON" SETPERSON TO THE DATA ENTERED, KEEP THE REST THE SAME, ELSE SET PLANET TO THE ENTERED DATA
// IF THERES AN ERROR SETNOTFOUND TO BE TRUE, WHICH TRIGGERS THE TERNARY IN THE INFO VARIABLE
    const starWarsApi = () => {
        axios.get(`https://swapi.dev/api/${name}/${id}`)
        .then(
            response => {
                console.log(response.data);
                if(name === "people") {
                    setPerson(response.data);
                    setPlanet([])
                    setNotFound(false);
                } else {
                    setPlanet(response.data);
                    setPerson([]);
                    setNotFound(false);
                }
            }
        )
        .catch(err => setNotFound(true));
    }

    // IF NOT FOUND IS TRUE, DISPLAY THE NOTFOUNDINFO, ELSE IF PERSON.LENGTH DOES NOT = 0(MEANING THERE IS INFO IN THE USESTATE ARRAY(WHICH HAPPENS WHEN ANYTHING IS ENTERED INTO THE INPUT)) DISPLAY THE PERSON INFO, ELSE DISPLAY PLANET INFO
    const info = (
        (notFound)?
            <div>
                <h1>These are not the droids your looking for</h1>
                <img src="https://www.giantbomb.com/a/uploads/original/0/6279/692288-obiwan_hood.jpg" alt="Obi-wan Kinobi"/>
            </div>
            :
            <div>
                {
                    !(person.length === 0)
                    ? (
                        <div>
                            <h1>{person.name}</h1>
                            <h3>Height: {person.height}</h3>
                            <h3>Mass: {person.mass}</h3>
                            <h3>Hair Color: {person.hair_color}</h3>
                            <h3>Skin Color: {person.skin_color}</h3>
                        </div>
                    )
                    : (
                        <div>
                            <h1>{planet.name}</h1>
                            <h3>Climate: {planet.climate}</h3>
                            <h3>Terrain: {planet.terrain}</h3>
                            <h3>Surface Water: {planet.surface_water}</h3>
                            <h3>Population: {planet.population}</h3>
                        </div>
                    )
                }
            </div>
    )

// RETURNING THE DISPLAY INFO WHICH IS IN THE INFO VARIABLE ABOVE
    return (
        <fieldset>
            <legend>API Info</legend>
            <h2>{info}</h2>
        </fieldset>
    )
}

export default DisplayInfo;