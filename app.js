const http = require('http');

const server = http.createServer((req,res) =>{
  console.log(req.url,req.method)  
  res.setHeader('Content-Type','text/html')
  res.write('<html>');
  res.write('<head>Hello,</head>');
  res.write('<body>It is first page</body>');
  res.write('</html>');
  res.end();
})

server.listen(3000)