const http = require('http');
const fs = require('fs');
const url = require('url');
const multer = require('multer');


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

 
  if (req.method === 'GET' && pathname === '/') {
    console.log('Server is listening on port 5500');
  }

  
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is Home Page');
    res.end();
  } else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is About Page');
    res.end();
  } else if (pathname === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is Contact Page');
    res.end();
  } else if (pathname === '/file-write') {
   
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File demo.txt created and text written: hello world');
      }
      res.end();
    });
  }
});


const upload = multer({ dest: 'uploads/' });


server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    upload.single('file')(req, res, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('File Upload Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File Uploaded Successfully');
      }
      res.end();
    });
  }
});

server.listen(5500);
