const express = require('express');
const app = express();

app.get("/", function(req, res){
res.send("hello");

});

app.get("/about", function(req,res){
res.send("luiz")

})

app.get("/contact", function(req,res){
res.send("contac")

})

app.listen(3000, function(){
    console.log("server started on port 3000.")
});