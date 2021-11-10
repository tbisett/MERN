import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AddPirate = () => {

    const[name, setName] = useState("");
    const[image, setImage] = useState("");
    const[treasure_chests, setTreasureChests] = useState("");
    const[catch_phrases, setCatchPhrases] = useState("");
    const[crew_position, setCrewPostion] = useState("");
    const[peg_leg, setPegLeg] = useState(true);
    const[eye_patch, setEyePatch] = useState(true);
    const[hook_hand, setHookHand] = useState(true);
    const[dbErrors, setDbErrors] = useState([]);

    let history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
            name,
            image,
            treasure_chests,
            catch_phrases,
            crew_position,
            peg_leg,
            eye_patch,
            hook_hand
        })
        .then( response => {
            console.log(response)
            history.push("/pirates")
        })
        .catch(err => {
            console.log(err);
            const {errors} = err.response.data;
            const messages = Object.keys(errors).map( error => errors[error].message);
            setDbErrors(messages);
        })
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to = "/pirates"><button>Crew Board</button></Link>
            {dbErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Treasure Chests:</label><br/>
                    <input type="number" onChange={(e)=>setTreasureChests(e.target.value)} value={treasure_chests}/>
                </p>
                <p>
                    <label>Catch Phrases:</label><br/>
                    <textarea name="" id="" cols="23.5" rows="3" onChange={(e)=>setCatchPhrases(e.target.value)} value={catch_phrases}></textarea>
                </p>
                <p>
                    <label>Image Url:</label><br/>
                    <input type="text" onChange={(e)=>setImage(e.target.value)} value={image}/>
                </p>
                <p>
                    <label>Crew Position:</label><br/>
                    <select onChange={(e)=>setCrewPostion(e.target.value)} value={crew_position}>
                        <option>Captain</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                </p>
                <p>
                    <label>Peg Leg</label><br/>
                    <input type="checkbox" checked={peg_leg} onChange={(e)=>setPegLeg(e.target.checked)} />
                </p>
                <p>
                    <label>Eye Patch</label><br/>
                    <input type="checkbox" checked={eye_patch} onChange={(e)=>setEyePatch(e.target.checked)} />
                </p>
                <p>
                    <label>Hook Hand</label><br/>
                    <input type="checkbox" checked={hook_hand} onChange={(e)=>setHookHand(e.target.checked)} />
                </p>
                <button>Add Pirate</button>
            </form>
        </div>
    )
    
}

export default AddPirate;