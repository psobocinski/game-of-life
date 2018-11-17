const Cell = require('./game_of_life');

// cell has four neightbours:
//  -  north, south, west, east
// properties / methods:
//  - alive
//  - tick()

xtest('given a live cell with one live neighbour', () => {
  let neighbour = new Cell();
  let cell = new Cell(
    {
      neighbours: { west: neighbour }
    }
  );

  cell.tick();

  expect(cell.alive).toBe(false);
});

test('given a live cell with two live neighbours', () => {
  let westNeighbour = new Cell();
  let eastNeighbour = new Cell();
  let cell = new Cell(
    {
      neighbours: { west: westNeighbour, east: eastNeighbour }
    }
  );

  cell.tick();

  expect(cell.alive).toBe(true);
});
