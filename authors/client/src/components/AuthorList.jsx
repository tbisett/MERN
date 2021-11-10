// ALL NECESSARY IMPORTS
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

// AUTHOR LIST FUNCTION
// USE STATES FOR PASSING IN INFO TO DOM
// DELETE FUNCTION NESTED IN TO BE ABLE TO DELETE AN AUTHOR ON PAGE
const AuthorList = (props) => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then( res => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const Delete = (deleteId) => {
        // Displaying an alert when the delete function is called
        // Window either returns true or false/ yes or no
        if(window.confirm("Are you sure you want to delete this????")){
            axios.delete("http://localhost:8000/api/authors/delete/" + deleteId)
                .then( response => {
                    console.log(response.data);
    
                    // remove from DOM after success
                    setAuthors ( authors.filter( author => author._id !== deleteId ))
                })
                .catch(err => console.log(err))
        }
    }
    

    // INFO THAT WILL RENDER ON PAGE
    // TABLE WHERE WE MAP THROUGH OUR AUTHORS TO DISPLAY EACH AUTHOR 
    // INCLUDES LINKS TO TAKE YOU TO AN AUTHORS DETAIL PAGE, AN EDIT PAGE, AND A DELETE BUTTON FOR EACH AUTHOR

    return (
        <div>
            <div style={{alignContent: "center"}}>
                <h3>We have quotes by: </h3>

                <table className="table table-striped table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Age</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        { authors.map( (author, index) => {
                        return(
                        <tr key = {index}>
                            <td><Link to={"/author/" + author._id}>{author.Name}</Link></td>
                            <td>{author.Age}</td>
                            <td><Link to ={"/author/update/" + author._id}>Update</Link></td>
                            <td><button onClick={() => Delete(author._id)}>Delete</button></td>
                        </tr>
                        )
                        })}
                    </tbody>
                </table>
        </div>
        </div>
    )
}

export default AuthorList;
                        