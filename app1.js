
const http = require('http');

const server= http.createServer((req, res) => {
    console.log(req.url, req.headers, res.method);
  //  process.exit();to process exit this is not used 
  res.setHeader('content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first node from backend</title></head>')
 res.write('<body>hello every one welcome to my page</body>');
  res.write('</html>');
 res.end();
});

server.listen(3000);

//crating response and requesting infromrion from server 
