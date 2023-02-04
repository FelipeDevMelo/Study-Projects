const bodyParser = require("body-parser");
const request = require("request");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))
app.get("/",function(req,res){

res.sendFile(__dirname+"/signup.html")

})

app.post("/",function(req,res){

   var firstName = req.body.firstName;
   var lastName = req.body.lastName;
   var email = req.body.email;

   

})


app.listen(3000,function(){

    console.log("server is running on port 3000")
})


// api key = 32bcfb4c743761f215bbdfe5d710827b-us12