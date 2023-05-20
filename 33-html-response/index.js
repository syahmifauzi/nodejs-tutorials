const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  // res.end(html);
  // use streams if the html file size is large
  fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
});

server.listen(3000, () => {
  console.log('Server running on port 3000!');
});
