import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";



const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    // use effect to grab the single product information
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" +id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    // new delete method to delete product form this page
    const DeleteDetail = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' +id, {
        })
        .then(response => console.log(response), console.log("success"))
        .catch(err => console.log(err))
    history.push('/api/products')
    }

    return (
        <div>
            <p>Product Name: {product.productName}</p>
            <p>Product Price: {product.productPrice}</p>
            <p>Product Description: {product.productDescription}</p>
            <button onClick={() => DeleteDetail(product._id)}>Delete</button>
        </div>
    )
}

export default Detail