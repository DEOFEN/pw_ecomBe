const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const controller = require('./controller');

router.post('/signup',
   controller.signup
)

router.post('/login',
   controller.login
)

router.get('/getAllProducts',
   controller.getAllProducts
);





module.exports = router;