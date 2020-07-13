var http = require('http')
const { detect } = require('detect-browser');
const browser = detect();

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let d = new Date();
        // let msg = d.getDate() + '/' + (d.getMonth()+1) +'/'+d.getFullYear() + ' ' 
        //   +d.getHours() + ' :'  + d.getMinutes() + ':' +d.getSeconds();  
        //let msg = browser.type + '/' + browser.version + '/' + browser.os;
        // set response content    
        var msg = '<a href="/login">Login page</a><br><a href="/register">Register</a>';
        res.write(`<html><body><p style="color:red">${msg}</p><app/body></html>`);
        res.end();
    }else if(req.url =='/login'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write(`<html><body><p style="color:red">Login page</p><app/body></html>`);
        res.end();
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
    }
   
})

server.listen(5000);
console.log('server is running on port 5000');
