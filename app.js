/*path constructing path
http launching server, send requests and  
https lanch a ssl server
require used to improt the file secefied path or core module 
./ avalble path relative path
 /abolute apth 
core module  it alwave slok for golabal module  */



const http = require('http');

const server= http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);

// request is consoled heree
