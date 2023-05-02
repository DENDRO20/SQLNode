const http = require("http");
const fs = require("fs");
const path = require("path");

const pathIndex = path.join(__dirname, 'static', 'index.html');
const indexFile = fs.readFileSync(pathIndex);

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(indexFile);
    }
    res.statusCode = 404;
    return res.end('Error');
    
});


server.listen(3000);