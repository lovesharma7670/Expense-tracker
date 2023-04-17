const express = require('express')
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const { db } = require('./db/db');
const {readdirSync} = require("fs")





app.use(express.json())
app.use(cors())

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

mongoose.connect("mongodb://0.0.0.0:27017/Income");

// log in 






// login   

 

app.get("/", function(req,res){
    res.send("hello")
})



readdirSync('./router').map((route) => app.use('/api/v1', require ("./router/" + route)))

const server = () => {
    
    app.listen(port, function () {
        console.log("The server has started successfully", port);
    })
}
 
server()