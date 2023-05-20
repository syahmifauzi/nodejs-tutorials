// Event Driven Programming (example)

const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log('Serving complimentary drink');
  }
});

console.log('Do something before event occurs in the system');

setTimeout(() => {
  emitter.emit('order-pizza', 'large', 'mushroom');
}, 3000);
