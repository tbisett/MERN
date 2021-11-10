import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';


const ViewPirates = (props) => {
    
    const [pirates, setPirates] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/pirates')
        .then(response => {
            console.log(response.data);
            setPirates(response.data);
        })
        .catch(err => console.log(err))
    }, []);

    const deletePirate = (deleteId) => {
        if(window.confirm("Are you sure you want to delete this pirate?")) {
            axios.delete('http://localhost:8000/api/pirates/' + deleteId)
                .then( response => {
                    console.log(response.data);
                    setPirates(pirates.filter( pirates => pirates._id !== deleteId))
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <div>
                { pirates.map( (pirate, index) => {
                    return(
                        <div key={index} style={{backgroundColor: "tan", marginTop: "2em", height:"auto", width: "1000px", marginLeft: "15em"}}>
                            <img src={pirate.image}></img>
                            <h3>{pirate.name}</h3>
                            <p>{pirate.catch_phrases}</p>
                            <Link to ={"/pirate/" + pirate._id}><button>View Pirate</button></Link>
                            <button onClick= { () => deletePirate(pirate._id)}>Walk the Plank</button>
                            <br></br>
                        </div>
                        
                        
                    )
                })}
            </div>
        </div>
    )

}
export default ViewPirates;

