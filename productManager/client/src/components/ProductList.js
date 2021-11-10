import React from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useParams } from "react-router";


const ProductList = (props) => {
    const history = useHistory();
    const Delete = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' +id, {
        })
        .then(response => console.log(response), console.log("success"))
        .catch(err => console.log(err))
    history.push('/api/products')
    }
    

return (
    <div>
        {props.product.map( (product, i) => 
        <p key={i}><a href={`/api/products/${product._id}`}>Name: {product.productName}, Price: {product.productPrice}, Description: {product.productDescription}</a><br/><button onClick={() => Delete(product._id)}>Delete</button></p>)}
    </div>
)
}
export default ProductList;


