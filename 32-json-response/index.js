const http = require('node:http');

const server = http.createServer((req, res) => {
  const author = {
    firstName: 'Syahmi',
    lastName: 'Fauzi',
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(author));
});

server.listen(3000, () => {
  console.log('Server running on port 3000!');
});
