import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewOne = (props) => {
    const { id } = useParams();
    const [singlePirate, setSinglePirate] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(response => {
                console.log(response.data);
                setSinglePirate(response.data);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h3>{singlePirate.name}</h3>
            <div>
                <img src={singlePirate.image}></img>
                <h2>"{singlePirate.catch_phrases}"</h2>
            </div>
            <div>
                <h3>Treasures: {singlePirate.treasure_chests}</h3>
                <h3>Peg leg: {singlePirate.peg_leg ? "yes" : "no"}</h3>
                <h3>Eye Patch {singlePirate.eye_patch ? "yes" : "no"}</h3>
                <h3>Hook Hand: {singlePirate.hook_hand ? "yes" : "no"}</h3>
            </div>
        </div>
    )
                

}

export default ViewOne;