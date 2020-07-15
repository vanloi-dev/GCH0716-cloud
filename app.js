var express = require('express');
var app = express();
const path = require('path')
var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/addNote',function(req,res){
    let p = path.join(__dirname) +'/addNote.html';
    res.sendFile(p);
})
app.post('/doAddNote',function(req,res){
    let note = req.body.txtNote;
    fs.appendFile('note.txt',note,function(error){
        if (error){
            console.log("File k co!")
        }else{
            console.log('Append file Ok');
        }
    })
    //hien thi(copy phia duoi)
    fs.readFile('note.txt','utf8',function(err,data){
        if(err){
            console.log('File khong co hoac k doc duoc!');
        }
        else{           
            res.send(`<html><body>${data}</body></html>`);
        }
    })
    
})
app.get('/allNote',function(req,res){
    fs.readFile('note.txt','utf8',function(err,data){
        if(err){
            console.log('File khong co hoac k doc duoc!');
        }
        else{           
            res.send(`<html><body>${data}</body></html>`);
        }
    })
})

app.get('/',function(req,res){
    let p = path.join(__dirname) +'/index.html';
    res.sendFile(p);
})
app.get('/help',function(req,res){
    res.send('hello 1233');
})

app.get('/login',function(req,res){
    let p = path.join(__dirname) +'/login.html';
    res.sendFile(p);GCH16548
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
