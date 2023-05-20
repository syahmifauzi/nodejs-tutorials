# Node.js Tutorials

This repository contains a collection of tutorials for learning Node.js. Each tutorial is organized into separate directories, covering various topics and concepts related to Node.js development.

## Tutorials

The following is a list of tutorials available in this repository:

- **06-hello-world**: Learn how to create a simple "Hello, World!" program in Node.js.

  ```javascript
  console.log('Hello, World!');
  ```

- **09-local-modules**: Explore how to create and use local modules in Node.js.

  ```javascript
  // math.js
  exports.add = (a, b) => a + b;

  // index.js
  const math = require('./math');

  console.log(math.add(2, 3)); // Output: 5
  ```

- **10-module-exports**: Understand the `module.exports` and `exports` objects for exporting functionality from Node.js modules.

  ```javascript
  // math.js
  module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  // index.js
  const math = require('./math');

  console.log(math.add(2, 3)); // Output: 5
  console.log(math.subtract(5, 2)); // Output: 3
  ```

- **11-module-scope**: Dive into the concept of module scope and how it affects variable accessibility in Node.js.

  ```javascript
  // math.js
  const a = 5;

  module.exports = {
    multiply: (b) => a * b,
  };

  // index.js
  const math = require('./math');

  console.log(math.multiply(3)); // Output: 15
  ```

- **12-module-wrapper**: Learn about the module wrapper function and its role in executing Node.js modules.

  ```javascript
  // This code is automatically wrapped by Node.js module system.
  // Your module code here.

  console.log('Module code execution');
  ```

- **13-module-caching**: Understand module caching in Node.js and how it improves performance.

  ```javascript
  // math.js
  let count = 0;

  module.exports = {
    increment: () => {
      count++;
      console.log(`Count: ${count}`);
    },
  };

  // index.js
  const math = require('./math');

  math.increment(); // Output: Count: 1
  math.increment(); // Output: Count: 2
  ```

- **14-import-export-patterns**: Explore different patterns for importing and exporting functionality in Node.js.

  ```javascript
  // math.js
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  module.exports = {
    add,
    subtract,
  };

  // index.js
  const { add, subtract } = require('./math');

  console.log(add(2, 3)); // Output: 5
  console.log(subtract(5, 2)); // Output: 3
  ```

- **16-es-modules**: Learn how to use ECMAScript modules (ES modules) in Node.js.

  ```javascript
  // math.js
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;

  // index.js
  import { add, subtract } from './math.js';

  console.log(add(2, 3)); // Output: 5
  console.log(subtract(5, 2)); // Output: 3
  ```

- **17-importing-json**: Understand how to import JSON files in Node.js modules.

  ```javascript
  // data.json
  {
    "name": "John",
    "age": 30
  }

  // index.js
  const data = require('./data.json');

  console.log(data.name); // Output: John
  console.log(data.age); // Output: 30
  ```

- **19-path-module**: Learn about the built-in `path` module in Node.js and its functions for working with file paths.

  ```javascript
  const path = require('path');

  const filePath = '/path/to/file.txt';

  console.log(path.dirname(filePath)); // Output: /path/to
  console.log(path.basename(filePath)); // Output: file.txt
  console.log(path.extname(filePath)); // Output: .txt
  ```

- **20-callback-pattern**: Explore the callback pattern and asynchronous programming in Node.js.

  ```javascript
  const fs = require('fs');

  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  ```

- **21-event-module**: Understand the Event module in Node.js and how to work with events and event emitters.

  ```javascript
  const EventEmitter = require('events');

  const myEmitter = new EventEmitter();

  myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
  });

  myEmitter.emit('greet', 'John'); // Output: Hello, John!
  ```

- **22-extending-from-eventemitter**: Learn how to create custom event emitters by extending the `EventEmitter` class in Node.js.

  ```javascript
  const EventEmitter = require('events');

  class MyEmitter extends EventEmitter {}

  const myEmitter = new MyEmitter();

  myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
  });

  myEmitter.emit('greet', 'John'); // Output: Hello, John!
  ```

- **24-streams-and-buffers**: Explore the concepts of streams and buffers in Node.js for efficient data handling.

  ```javascript
  const fs = require('fs');

  const readableStream = fs.createReadStream('input.txt');
  const writableStream = fs.createWriteStream('output.txt');

  readableStream.pipe(writableStream);
  ```

- **26-fs-module**: Learn about the built-in `fs` module in Node.js for file system operations.

  ```javascript
  const fs = require('fs');

  const content = 'Hello, World!';

  fs.writeFile('file.txt', content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created successfully!');
  });
  ```

- **27-fs-promise-module**: Understand how to use promises with the `fs` module in Node.js for asynchronous file system operations.

  ```javascript
  const fs = require('fs').promises;

  async function writeFile() {
    const content = 'Hello, World!';

    try {
      await fs.writeFile('file.txt', content);
      console.log('File created successfully!');
    } catch (err) {
      console.error(err);
    }
  }

  writeFile();
  ```

- **28-streams**: Dive into different types of streams in Node.js and how to work with them.

  ```javascript
  const { Readable, Writable, Duplex, Transform } = require('stream');

  // Readable Stream
  const readableStream = new Readable({
    read() {
      // Read implementation
    },
  });

  // Writable Stream
  const writableStream = new Writable({
    write(chunk, encoding, callback) {
      // Write implementation
    },
  });

  // Duplex Stream
  const duplexStream = new Duplex({
    read() {
      // Read implementation
    },
    write(chunk, encoding, callback) {
      // Write implementation
    },
  });

  // Transform Stream
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      // Transform implementation
    },
  });
  ```

- **29-pipes**: Explore how to use pipes to simplify data transfer between streams in Node.js.

  ```javascript
  const fs = require('fs');

  const readableStream = fs.createReadStream('input.txt');
  const writableStream = fs.createWriteStream('output.txt');

  readableStream.pipe(writableStream);
  ```

- **31-creating-a-node-server**: Learn how to create a basic HTTP server using the `http` module in Node.js.

  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

- **32-json-response**: Understand how to handle JSON responses in Node.js web applications.

  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, World!' }));
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

- **33-html-response**: Learn how to generate and send HTML responses in Node.js web applications.

  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

- **34-html-template**: Explore the concept of using HTML templates in Node.js for dynamic web content.

  ```javascript
  const http = require('http');
  const fs = require('fs');
  const ejs = require('ejs');

  const server = http.createServer((req, res) => {
    const template = fs.readFileSync('template.ejs', 'utf8');
    const renderedTemplate = ejs.render(template, { name: 'John' });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(renderedTemplate);
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

- **35-http-routing**: Understand how to implement routing for HTTP requests in Node.js web applications.

  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Home Page');
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('About Page');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

- **39-thread-pool**: Learn about the thread pool in Node.js and how it helps handle asynchronous operations efficiently.

  ```javascript
  const crypto = require('crypto');

  const start = Date.now();

  crypto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', () => {
    console.log('Hashing completed', Date.now() - start);
  });
  ```

- **40-thread-pool-size**: Understand how to configure the size of the thread pool in Node.js for better performance.

  ```javascript
  // Increase the thread pool size to 8
  process.env.UV_THREADPOOL_SIZE = 8;

  const crypto = require('crypto');

  const start = Date.now();

  crypto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', () => {
    console.log('Hashing completed', Date.now() - start);
  });
  ```

- **41-network-io**: Explore network I/O operations in Node.js, including TCP and UDP communication.

  ```javascript
  const net = require('net');

  // TCP Server
  const tcpServer = net.createServer((socket) => {
    socket.on('data', (data) => {
      console.log(`Received TCP data: ${data}`);
    });
  });

  tcpServer.listen(3000, () => {
    console.log('TCP server listening on port 3000');
  });

  // UDP Server
  const udpServer = net.createSocket('udp4');

  udpServer.on('message', (msg, rinfo) => {
    console.log(`Received UDP message: ${msg}`);
  });

  udpServer.bind(3000, () => {
    console.log('UDP server listening on port 3000');
  });
  ```

- **42-microtask-queues**: Understand the concept of microtask queues in Node.js event loop and how they differ from the task queue.

  ```javascript
  console.log('Script start');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  Promise.resolve().then(() => {
    console.log('Promise');
  });

  console.log('Script end');
  ```

- **43-timer-queue**: Explore the timer queue in Node.js and how timers are scheduled and executed.

  ```javascript
  console.log('Script start');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate');
  });

  console.log('Script end');
  ```

- **58-building-cli-tools**: Learn how to build command-line interface (CLI) tools using Node.js.

  ```javascript
  // index.js
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
  });
  ```

- **59-cli-options**: Understand how to handle command-line options and arguments in Node.js CLI applications.

  ```javascript
  // index.js
  const args = process.argv.slice(2);

  const name = args[0];

  console.log(`Hello, ${name}!`);
  ```

- **60-interactive-cli-tools**: Learn how to build interactive command-line tools in Node.js.

  ```javascript
  // index.js
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter a number: ', (number) => {
    const result = parseInt(number) * 2;
    console.log(`The result is: ${result}`);
    rl.close();
  });
  ```

- **61-cluster-module**: Explore the cluster module in Node.js for creating scalable applications using child processes.

  ```javascript
  const cluster = require('cluster');
  const os = require('os');

  if (cluster.isMaster) {
    const numCPUs = os.cpus().length;

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    // Worker process code
  }
  ```

- **62-worker-threads-module**: Learn how to use the worker_threads module in Node.js for running JavaScript code in separate threads.

  ```javascript
  const { Worker } = require('worker_threads');

  const worker = new Worker('./worker.js');

  worker.on('message', (message) => {
    console.log(`Received message from worker: ${message}`);
  });

  worker.postMessage('Hello, Worker!');
  ```

Feel free to explore each directory for detailed tutorials and examples on Node.js concepts and features. Happy learning!
