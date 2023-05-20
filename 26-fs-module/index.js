const fs = require('node:fs');
const path = require('node:path');

const filepath = path.join(__dirname, 'data.txt');

console.log('First');

// Synchronous Method (good for reading config file before doing anything - block execution)
console.log(fs.readFileSync(filepath)); // print Buffer (in hexadecimal)
console.log(fs.readFileSync(filepath, 'utf8')); // print `Hello, Node!`

console.log('Second');

// Asynchronous Method (to prevent blocking - for performance - run in thread)
// Error-first callback pattern (error, data) => {}
fs.readFile(filepath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log('Third');

const greetFilepath = path.join(__dirname, 'greet.txt');

fs.writeFileSync(greetFilepath, 'Hello, World!\n');

fs.writeFile(greetFilepath, 'Hello Syahmi!', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File written!');
  }
});
