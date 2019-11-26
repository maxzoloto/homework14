const http = require("http");
const port = 3000;
const fs = require("fs");
http.createServer(function (req, res){
switch (req.url){
    case "/":
        res.end("Hello World");
        break;
    case "/about":
        console.log(req);
        res.end();
        break;
    case "/contact":
    let file = fs.readFileSync("Index.html");
    res.end(file);
    break;
}
res.end()
        
}).listen(port, function(){
    console.log("Server at http://localhost:3000")
});
