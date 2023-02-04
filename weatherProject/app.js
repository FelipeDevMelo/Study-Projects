const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const https = require("https");
const { CONNREFUSED } = require("dns");

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
   
  

})

app.post("/",function(req,res){
    const query = req.body.CityName;
    const appIdd = "6020380f7ada84a99a3c4eeaaaa3795f"
    const urlGeocode = "https://api.openweathermap.org/geo/1.0/direct?q="+query+"&limit=1&appid="+appIdd
    https.get(urlGeocode,function(responseGeoCode){
      responseGeoCode.on("data",function(data){
        const geoCodeData = JSON.parse(data);


        const url = "https://api.openweathermap.org/data/3.0/onecall?lat="+geoCodeData[0].lat+"&lon="+geoCodeData[0].lon+"&exclude=hourly,daily&units=metric&appid="+appIdd
   
https.get(url,function(response){
    
   
  
    response.on("data",function(data){
        const weatherDaata = JSON.parse(data);
        const temp = weatherDaata.current.temp ;
        const urlIcon = weatherDaata.current.weather[0].icon;
        const imgURL= "http://openweathermap.org/img/wn/"+urlIcon+"@2x.png";
        const weatherDescription = weatherDaata.current.weather[0].description;
        res.write("<p>the weather is "+weatherDescription+" in "+weatherDaata.timezone+"</p>");
        res.write("<h1>the temperature is: " + temp+" degrees Celcius</h1>")
      
        res.write("<img src="+imgURL+">")
        res.send()
       


})

})

      })
    })
})




app.listen(3000,function(){
    console.log("Server started on port 3000")
})