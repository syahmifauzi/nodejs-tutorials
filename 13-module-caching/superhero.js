class Superhero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// default export
module.exports = new Superhero('Batman');
