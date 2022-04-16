const express = require("express");
const app = express();
const ecomRoutes = require("./controller/ecom/index")
const cors = require("cors")
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/ecom', ecomRoutes)

app.listen(3001, () => {
    console.log("SERVER IS UP AND RUNNING ON PORT: 3001")
})