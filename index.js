var express = require('express');
var app = express();
var bodyparser = require("body-parser");
const { urlencoded } = require('body-parser');

app.use(bodyparser.json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.post('/getValues',(req,res)=>{
    var mydata={
        Firstname:req.body.First,LastName:req.body.Last,Rollno:req.body.roll,email:req.body.email,qualification:req.body.qual,stream:req.body.field}

    res.send(mydata)
})


app.listen(3000);