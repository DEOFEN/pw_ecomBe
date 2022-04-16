const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecomdb', { useNewUrlParser: true, useUnifiedTopology: true });
var conn = mongoose.Collection;

var productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pice: {
        type: String
    },
    quantity: {
        type: Number
    },
    img: {
        type: String
    },
});

var productModel = mongoose.model('product', productSchema);
module.exports = productModel;