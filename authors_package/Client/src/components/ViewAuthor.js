import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ViewAuthor = (props) => {

    const { id } = useParams();

    const [thisAuthor, setThisAuthor] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(response => {
                console.log(response.data);
                setThisAuthor(response.data);
            })
            .catch(err => console.log(err))
            // To close the connection to the data base
            // .finally()
    }, [id])

    return (
        <div>
            <h3>Author: {thisAuthor.Name}</h3>
            <h3>Author Age: {thisAuthor.Age}</h3>
        </div>
    )
}

export default ViewAuthor;