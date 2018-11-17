const [Cell, Board] = require('./game_of_life');

test('Cell is dead when has one alive neighbor', () => {
  var cell = new Cell(true, [ new Cell(false) ]);
  expect(cell.nextGen().isAlive).toBe(false);
});

test('Cell is alive when has two alive neighbors', () => {
  var cell = new Cell(true, [ new Cell(true), new Cell(true) ]);
  expect(cell.nextGen().isAlive).toBe(true);
});

test('Cell is alive when has three alive neighbors', () => {
  var cell = new Cell(true, [ new Cell(true), new Cell(true), new Cell(true) ]);
  expect(cell.nextGen().isAlive).toBe(true);
});

test('Cell is dead when has four alive neighbors', () => {
  var cell = new Cell(true, [ new Cell(true), new Cell(true), new Cell(true), new Cell(true) ]);
  expect(cell.nextGen().isAlive).toBe(false);
});

test('Dead cell is alive when has three alive neighbors', () => {
  var cell = new Cell(false, [ new Cell(true), new Cell(true), new Cell(true) ]);
  expect(cell.nextGen().isAlive).toBe(true);
});

test('Dead cell is dead when has two alive neighbors', () => {
  var cell = new Cell(false, [ new Cell(true), new Cell(true) ]);
  expect(cell.nextGen().isAlive).toBe(false);
});

test('Board nextGen kills cells', () => {
  var cell1 = new Cell(true, [ new Cell(false) ]);
  var cell2 = new Cell(true, [ new Cell(false) ]);
  var board = new  Board([cell1, cell2]);

  expect(cell1.neighhours).toBe([cell2])
});


