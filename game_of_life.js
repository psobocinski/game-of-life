function Cell(isAlive, neighbours) {
  this.isAlive = isAlive;
  this.neighbours = neighbours;
  this.nextGen = function() {
    var aliveCount = 0;
    this.neighbours.forEach(function(neighbour) {
      if (neighbour.isAlive)
        aliveCount++;
    });

    if (this.isAlive == false && aliveCount == 3) {
      // cell is dead, and we revive it
      this.isAlive = true;
    } else if (this.isAlive == false && aliveCount != 3) {
      // cell is dead, and it stays dead
      this.isAlive = false;
    } else {
      // cell is alive, and it might die
      this.isAlive = (aliveCount >= 2 && aliveCount < 4);
    }

    return this;
  };
}

function Board() {

}

module.exports = [Cell, Board];
