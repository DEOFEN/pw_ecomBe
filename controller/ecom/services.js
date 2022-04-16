
const userModel = require("../../models/user");
const productModel = require("../../models/product")


function getAllProducts(){
    try{
        const allProducts = productModel.find({});
        console.log("allProducts",allProducts.data)
        return allProducts;
    }catch(error){
        console.log("ERRT", error)
    }
   
}

function signup(data){
    try{
        console.log("control", data)
    var userDetails = new userModel(data);
    userDetails.save(function(err,doc){
        if(err) return err;
        console.log("doc", doc)
         return doc;
      });
    }catch(error){
        console.log("ERRT", error)
    }
   
}

function login(data){
    console.log("control", data)
    try{
        const user = userModel.findOne({ "phoneno": data.phoneno, "password" : data.password });
        console.log("book", user)
        return user
    }catch(error){
       console.log("ERRT", error)
    }   
}

module.exports = {
    getAllProducts,
    signup,
    login
}