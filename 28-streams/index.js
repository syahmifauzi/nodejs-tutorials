const fs = require('node:fs');
const path = require('node:path');

const input = path.join(__dirname, 'input.txt');
const output = path.join(__dirname, 'output.txt');

const readableStream = fs.createReadStream(input, {
  encoding: 'utf8',
  highWaterMark: 2, // default to 64kb (we change to 2 bytes chunks)
});
const writableStream = fs.createWriteStream(output);

readableStream.on('data', (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
