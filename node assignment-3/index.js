const fs = require("fs");
const http=require("http");
fs.writeFile("index.html","<h1>Hello World</h1> \n <p>This is Muhammad Imran ...</p>",(err)=>{
    if(err){console.log(err);}
})
const server = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
    
});
server.listen(5000, () => {
    console.log('server is running at post 5000');
});