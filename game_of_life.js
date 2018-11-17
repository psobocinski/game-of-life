let Cell = class {
  constructor(args = {}) {
    this.alive = true;
    this.neighbours = args.neighbours;
  }

  tick() {
    this.alive = false;
  }
}

module.exports = Cell;
