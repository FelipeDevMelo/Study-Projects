const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/calculator.html")   
}
)

app.post("/", function(req,res){

        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);
           var Result = num1 + num2;
        res.send("Result: "+ Result);

})

app.listen(3333, function(){
    console.log("server started on port 3333")
})



//~~~~~~~~~~~~~~~BMI Calculator~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get("/calculator", function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html")


})

app.post("/bmiCalculator.html",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight/(Math.pow(height,2))
    res.send("result: "+result.toFixed(0))

})




