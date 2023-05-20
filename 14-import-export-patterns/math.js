// 1st export pattern
// module.exports = add

// 2nd export pattern
// module.exports = (a, b) => a + b;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// 3rd export pattern (object exports)
module.exports = {
  add,
  subtract,
};

// 4th export pattern
// module.exports.add = (a, b) => a + b;
// module.exports.subtract = (a, b) => a - b;

// 5th export pattern (iife exports - NOT recommended)
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;
