// Synchronous callbacks

function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = 'Syahmi';
  callback(name);
}

higherOrderFunction(greet);

let nums = [1, 9, 2, 3, 8, 3];
nums.sort((a, b) => a - b);
nums.filter((n) => n % 2 === 0);
nums.map((n) => n / 2);

// Asynchronous callbacks
// eg. addEventListener in browser
