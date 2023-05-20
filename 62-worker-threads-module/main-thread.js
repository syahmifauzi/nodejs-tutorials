const http = require('node:http');
const { Worker } = require('node:worker_threads');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home page');
  } else if (req.url === '/slow-page') {
    // execute code in parallel outside the main thread
    // best use-cases of worker threads:
    // resize images/videos, encrypt files
    const worker = new Worker('./worker-thread.js');
    worker.on('message', (j) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Slow Page ${j}`);
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000!');
});
