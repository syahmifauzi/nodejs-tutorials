const crypto = require('node:crypto');

// increasing the thread pool size can help with performance
// but that is limited by the number of available CPU cores
process.env.UV_THREADPOOL_SIZE = 18;
const MAX_CALLS = 18; // libuv has 4 threads by default

const start = Date.now();
for (let i = 0; i < MAX_CALLS; ++i) {
  // runs in separate thread (in libuv thread pool) - not in main thread
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash ${i}: `, Date.now() - start);
  });
}

// const start = Date.now();
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('Hash: ', Date.now() - start);
