// setTimeout(() => console.log('setTimeout() 1'), 1000);
// setTimeout(() => console.log('setTimeout() 2'), 500);
// setTimeout(() => console.log('setTimeout() 3'), 0);

setTimeout(() => console.log('setTimeout() 1'), 0);
setTimeout(() => {
  console.log('setTimeout() 2');
  process.nextTick(() => console.log('process.nextTick() inside setTimeout()'));
}, 0);
setTimeout(() => console.log('setTimeout() 3'), 0);

process.nextTick(() => console.log('process.nextTick() 1'));
process.nextTick(() => {
  console.log('process.nextTick() 2');
  process.nextTick(() =>
    console.log('inner process.nextTick() inside process.nextTick()')
  );
});
process.nextTick(() => console.log('process.nextTick() 3'));

Promise.resolve().then(() => console.log('Promise.resolve() 1'));
Promise.resolve().then(() => {
  console.log('Promise.resolve() 2');
  process.nextTick(() => {
    console.log('inner process.nextTick() inside Promise.resolve()');
  });
});
Promise.resolve().then(() => console.log('Promise.resolve() 3'));
