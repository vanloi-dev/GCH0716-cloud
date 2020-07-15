var express = require('express');
var app = express();
const path = require('path')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    let p = path.join(__dirname) +'/index.html';
    res.sendFile(p);
})

app.get('/login',function(req,res){
    let p = path.join(__dirname) +'/login.html';
    res.sendFile(p);
})
app.post('/doLogin',function(req,res){
    let name = req.body.txtName;
    let pass = req.body.txtPass;
    res.send(`Hello ${name} your pass is ${pass}`)
})
app.get('/register',function(req,res){
    let p = path.join(__dirname) +'/register.html';
    res.sendFile(p);
})


server = app.listen(5000,function(){
    console.log('Server is running 5000');
})
