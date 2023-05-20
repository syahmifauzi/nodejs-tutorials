const buffer = new Buffer.from('Syahmi');

console.log(buffer.toString()); // Syahmi
console.log(buffer); // In Hexadecimal
console.log(buffer.toJSON()); // In Int

buffer.write('Node');

console.log(buffer.toString()); // Nodemi
console.log(buffer); // In Hexadecimal
console.log(buffer.toJSON()); // In Int

buffer.write('JavaScript'); // Buffer is limited

console.log(buffer.toString()); // Javasc
console.log(buffer); // In Hexadecimal
console.log(buffer.toJSON()); // In Int
