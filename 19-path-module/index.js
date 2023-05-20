// built-in module (`node:`) is optional but recommended
const path = require('node:path');

console.log(Object.keys(path));
console.log(__filename);
console.log(__dirname);

console.log('\n===== path.basename() =====');
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log('\n===== path.extname() =====');
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log('\n===== path.parse() =====');
console.log(path.parse(__filename));

console.log('\n===== path.format() =====');
console.log(path.format(path.parse(__filename)));

console.log('\n===== path.isAbsolute() =====');
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));
console.log(path.isAbsolute('/foo/bar/data.json'));

console.log('\n===== path.join() =====');
console.log(path.join('foo', 'bar', 'data.json'));
console.log(path.join('/foo', 'bar', 'data.json'));
console.log(path.join('///foo', 'bar', 'data.json'));
console.log(path.join('../foo', '/bar', 'data.json'));
console.log(path.join('/foo', 'bar', '../data.json'));
console.log(path.join('/foo', 'bar', '../../data.json'));
console.log(path.join(__dirname, 'data.json'));

console.log('\n===== path.resolve() =====');
console.log(path.resolve('foo', 'bar', 'data.json'));
console.log(path.resolve('/foo', 'bar', 'data.json'));
console.log(path.resolve('///foo', 'bar', 'data.json'));
console.log(path.resolve('../foo', '/bar', 'data.json'));
console.log(path.resolve('/foo', 'bar', '../data.json'));
console.log(path.resolve('/foo', 'bar', '../../data.json'));
console.log(path.resolve(__dirname, 'data.json'));
