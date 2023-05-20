// immediately invoked function expression (iife)

(function (message) {
  const superhero = 'batman';
  console.log(message, superhero);
})('Hello');

(function (message) {
  const superhero = 'superman';
  console.log(message, superhero);
})('Hola');

(function (exports, require, module, __filename, __dirname) {
  console.log('all five parameters in nodejs module');
})();
