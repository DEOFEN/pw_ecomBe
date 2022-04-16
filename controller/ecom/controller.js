const service = require('./services')

async function login(req,res){
    try{
        let checkLogin = await service.login(req.body);
        console.log("pollData", checkLogin)

        if(checkLogin){
            let response = {statusCode: 200,msg: "SUCCESS",data: checkLogin};

            res.type("json");
            return res.send(JSON.stringify(response));
        }else{
            let response = {statusCode: 400,msg: "ERROR",error: "Inavalid user"};

            res.type("json");
            return res.send(JSON.stringify(response));
        }
         
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }
}

async function signup(req,res){
    try{

        let dataObj = {
            phoneno: req.body.phoneno,
            password: req.body.password,
            name: req.body.name
        }

        let registerResp = await service.signup(dataObj);
          
        console.log("registerResponse", registerResp)
         let response =  {
             statusCode: 200,
             msg: "SUCCESS",
             data: registerResp
         };

         res.type("json");
         return res.send(JSON.stringify(response));
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }
 }

 async function getAllProducts(req,res){
    try{
        let allProducts = await service.getAllProducts(req.body);
        console.log("pollData", allProducts)

        if(allProducts){
            let response = {statusCode: 200,msg: "SUCCESS",data: allProducts};

            res.type("json");
            return res.send(JSON.stringify(response));
        }else{
            let response = {statusCode: 400,msg: "ERROR",error: "No data found"};

            res.type("json");
            return res.send(JSON.stringify(response));
        }
         
    }catch(error){
        let errorData =  {statusCode: 400,msg: "ERROR",error: error};

        res.type("json");
         return res.send(JSON.stringify(errorData));
    }
}


module.exports = {
    signup,
    login,
    getAllProducts
}