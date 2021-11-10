const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: { type: String },
    productPrice: { type: String },
    productDescription: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

