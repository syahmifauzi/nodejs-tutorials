const https = require('node:https');

// https.request does not use the thread pool
// it does not affected by the number of CPU cores either
// it is a network i/o operation and not a CPU bound operation

// in Node.js, async methods are handled by libuv
// they are handled in two different ways:
// 1. native async mechanism (whenever possible)
// 2. thread pool
// - to avoid blocking the main thread

const MAX_CALLS = 50;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; ++i) {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`Request ${i}: `, Date.now() - start);
      });
    })
    .end();
}
