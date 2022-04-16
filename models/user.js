const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecomdb', { useNewUrlParser: true, useUnifiedTopology: true });
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;