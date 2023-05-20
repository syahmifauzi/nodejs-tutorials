const superhero = require('./superhero');

console.log(superhero.getName());
superhero.setName('Superman');
console.log(superhero.getName());

const newSuperhero = require('./superhero');

console.log(newSuperhero.getName());
// this will log "Superman" because of cache
// instead, export the Superhero class itself and instantiate it like so
// module.exports = Superhero
// const Superhero = require('./superhero')
// const batman = new Superhero('Batman')
// const superman = new Superhero('Superman')
