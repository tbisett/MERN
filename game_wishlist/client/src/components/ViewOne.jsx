import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewOne = (props) => {
    const { id } = useParams();
    const [singleGame, setSingleGame] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/games/" + id)
            .then(response => {
                console.log(response.data);
                setSingleGame(response.data);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h3>Title: {singleGame.title}</h3>
            <h3>Description: {singleGame.description}</h3>
            <h3>Price: {singleGame.price}</h3>
            <h3>Genre: {singleGame.genre}</h3>
            <h3>Important: {singleGame.important ? "🌟" : "N/A"}</h3>
        </div>
    )

}
export default ViewOne;