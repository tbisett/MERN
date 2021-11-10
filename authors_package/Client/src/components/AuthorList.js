import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';


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
                        