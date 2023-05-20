const cluster = require('node:cluster');
const http = require('node:http');
const OS = require('node:os');

console.log(OS.cpus().length);
// to make it easy, use pm2 to run no cluster file in a cluster mode
// pm2 will create workers based on how many cores the system has
// run `$ pm2 start no-cluster.js -i 0`
// -i 0 means pm2 will determine the optimum number of workers to create
// to stop, run `$ pm2 stop no-cluster.js`

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process ${process.pid} is running`);

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home page');
    } else if (req.url === '/slow-page') {
      for (let i = 0; i < 6000000000; ++i) {} // simulate CPU work
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Slow Page');
    }
  });

  server.listen(3000, () => {
    console.log('Server running on port 3000!');
  });
}
