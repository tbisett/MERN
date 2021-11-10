
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const WishList = (props) => {

    const [games, setGames] = useState([]);
    

    useEffect( () => {
        axios.get('http://localhost:8000/api/games')
        .then( response => {
            console.log(response.data);
            setGames(response.data);
        })
        .catch(err => console.log(err));
    },[]);

    const deleteGame = (deleteId) => {
        if(window.confirm("Are you sure you want to delete this game?")) {
            axios.delete('http://localhost:8000/api/games/' + deleteId)
                .then( response => {
                    console.log(response.data);
                    setGames(games.filter( games => games._id !== deleteId))
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <div style={{alignContent: "center"}}>
                <h2>Wishlist</h2>

                <table className="table table-striped table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Genre</th>
                            <th>Important</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { games.map( (game, index) => {
                            return(
                            <tr key= {index}>
                                <td><Link to = {"/game/" + game._id}>{game.title}</Link></td>
                                <td>{game.description}</td>
                                <td>{game.price}</td>
                                <td>{game.genre}</td>
                                <td>{game.important  ?  "🌟" : ""}</td>
                                <td><Link to ={ "/game/update/" + game._id}>Update</Link></td>
                                <td><button onClick={ () => deleteGame(game._id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    )

}

export default WishList;