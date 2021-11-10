const { response } = require('express');
const { Product } = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// FUNCTION THAT CREATES A PRODUCT
module.exports.createProduct = (request, response) => {
    const { productName, productPrice, productDescription } = request.body;
    Product.create({
        productName,
        productPrice,
        productDescription
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.findProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.findByIdAndDelete(request.params.id) 
        .then(results => response.json(results))
        .catch(err => response.json(err))
}