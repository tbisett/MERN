import React from "react";
import axios from 'axios';

const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) => 
            <p key={i}><a href={`/api/products/${product._id}`}>Name: {product.productName}, Price: {product.productPrice}, Description: {product.productDescription}</a></p>)}
        </div>
    )
}
export default ProductList;