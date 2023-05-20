const fs = require('node:fs/promises');
const path = require('node:path');

const filepath = path.join(__dirname, 'data.txt');

console.log('First');

fs.readFile(filepath, 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log('Second');

(async function () {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

console.log('Third');
