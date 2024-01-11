const http = require('http');

const server = http.createServer((req,res) =>{
  const url = req.url;
  if(url === '/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head>Hello,</head>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"></input></form>');
    res.write('</html>');
    return res.end()
  }
  res.setHeader('Content-Type','text/html')
  res.write('<html>');
  res.write('<head>Hello,</head>');
  res.write('<body>It is first page</body>');
  res.write('</html>');
  res.end();
})

server.listen(3000)