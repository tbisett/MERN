import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" +id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>Product Name: {product.productName}</p>
            <p>Product Price: {product.productPrice}</p>
            <p>Product Description: {product.productDescription}</p>
        </div>
    )
}

export default Detail