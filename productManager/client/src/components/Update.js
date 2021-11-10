import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default (props) => {
    //keep track of what is being typed via useState hook
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

    let history = useHistory();
    const { id } = useParams();
    
    // useeffect to grab the single items info from db and then set it (on successful get) to the input placeholder as the already eneterd info from DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id,) 
            .then(res => {
                console.log(res.data);
                setProductName(res.data.productName);
                setProductPrice(res.data.productPrice);
                setProductDescription(res.data.productDescription);
            })
            .catch(err => console.log(err))
    }, [id])
    
    //handler when the form is submitted
    const updateHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        
        //make a post request to create a new person
        // Make sure the local host your sending the axios put to is the server and not the client
        axios.put('http://localhost:8000/api/products/update/' + id, {
            productName,
            productPrice,
            productDescription
        })
            .then(res => {
                console.log(res.data);
                console.log("success");
            })
            .catch(err => console.log(err), console.log("request failed"))
            history.push('/api/products');
    }
    //onChange to update firstName and lastName
    // ===============FIGURE OUT HOW TO AUTO POPULATE THE FIELDS WITH THE INFO FROM DB===============
    return (
        <form onSubmit={updateHandler}>
            <h1>Update Product</h1>
            <p>
                <label>Product Name</label><br />
                <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName}  />
            </p>
            <p>
                <label>Product Price</label><br />
                <input type="text" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}  />
            </p>
            <p>
                <label>Product Description</label><br />
                <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} />
            </p>
            <input type="submit" />
        </form>
    )
}



