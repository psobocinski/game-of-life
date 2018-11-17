const Cell = require('./game_of_life');

// cell has four neightbours:
//  -  north, south, west, east
// properties / methods:
//  - alive
//  - tick()

test('given a live cell with one live neighbour', () => {
  let cell = new Cell(true);
  cell.tick();
  expect(cell.alive).toBe(false);
});

// test('')
