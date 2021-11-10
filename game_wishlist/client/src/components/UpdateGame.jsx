import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UpdateGame = () => {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[price, setPrice] = useState("");
    const[genre, setGenre] = useState("");
    const [important, setImportant] = useState(false);
    const[dbErrors, setDbErrors] = useState([]);

    let history = useHistory();
    const { id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/games/' + id)
            .then(response => {
                console.log(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setGenre(response.data.genre);
                setImportant(response.data.important);
            })
            .catch(err => console.log(err))
    }, [id])
    
    
    const onUpdateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/games/' + id, {
            title,
            description,
            price,
            genre,
            important
        })
        .then(response => {
            console.log(response)
            history.push("/")
        })
        .catch(err => {
            console.log(err);
            const {errors} = err.response.data;
            const messages = Object.keys(errors).map( error => errors[error].message);
            console.log(messages);
            setDbErrors(messages);
        })
    }

    return (
        <div>
            <h1>Update Game on Wishlist</h1>
            {dbErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <form onSubmit={onUpdateHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea name="" id="" cols="23.5" rows="3" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Genre</label><br/>
                    <input type="text" onChange={(e)=>setGenre(e.target.value)} value={genre}/>
                </p>
                <p>
                    <label>Important</label><br/>
                    <input type="checkbox" checked={important} onChange={(e)=>setImportant(e.target.checked)} />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default UpdateGame;