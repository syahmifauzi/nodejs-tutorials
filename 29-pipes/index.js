const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib'); // compression module

const input = path.join(__dirname, 'input.txt');
const output = path.join(__dirname, 'output.txt');
const outputGz = path.join(__dirname, 'output.txt.gz');

const readableStream = fs.createReadStream(input, {
  encoding: 'utf8',
  highWaterMark: 2, // default to 64kb (we change to 2 bytes chunks)
});

const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.WriteStream(outputGz));

const writableStream = fs.createWriteStream(output);

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

readableStream.pipe(writableStream);
