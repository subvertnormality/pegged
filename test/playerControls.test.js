'use strict';


const gridFactory = require('../lib/gridFactory.js');
const playerControls = require('../lib/playerControls.js');

describe('Player controls', () => {

  let initialGameGrid;

  beforeEach(() => {
    initialGameGrid = gridFactory.createInitialisedGrid();
  });

  test('can fetch player 1', () => {
    expect(playerControls.fetchPlayerOneIndex(initialGameGrid)).toEqual([9, 3]);
  });

  test('can fetch player 2', () => {
    expect(playerControls.fetchPlayerTwoIndex(initialGameGrid)).toEqual([9, 7]);
  });

  test('can get player 1 actions from initial grid', () => {

    expect(playerControls.getValidPlayerActions(initialGameGrid, 1)).toEqual({
      moves: new Set([[9, 1], [9, 5], [11, 3], [7, 3]]),
      builds: new Set([
        [0, 1], [0, 3], [0, 5], [0, 7], [0, 9],
        [1, 0], [1, 2], [1, 4], [1, 6], [1, 8], [1, 10],
        [2, 1], [2, 3], [2, 5], [2, 7], [2, 9],
        [3, 0], [3, 2], [3, 4], [3, 6], [3, 8], [3, 10],
        [4, 1], [4, 3], [4, 5], [4, 7], [4, 9],
        [5, 0], [5, 2], [5, 4], [5, 6], [5, 8], [5, 10],
        [6, 1], [6, 3], [6, 5], [6, 7], [6, 9],
        [7, 0], [7, 2], [7, 4], [7, 6], [7, 8], [7, 10],
        [8, 1], [8, 3], [8, 5], [8, 7], [8, 9],
        [9, 0], [9, 2], [9, 4], [9, 6], [9, 8], [9, 10],
        [10, 1], [10, 3], [10, 5], [10, 7], [10, 9],
        [11, 0], [11, 2], [11, 4], [11, 6], [11, 8], [11, 10],
        [12, 1], [12, 3], [12, 5], [12, 7], [12, 9]
      ])
    });
  });

  test('can get player 2 actions from initial grid', () => {
    expect(playerControls.getValidPlayerActions(initialGameGrid, 2)).toEqual({
      moves: new Set([[9, 5], [9, 9], [11, 7], [7, 7]]),
      builds: new Set([
        [0, 1], [0, 3], [0, 5], [0, 7], [0, 9],
        [1, 0], [1, 2], [1, 4], [1, 6], [1, 8], [1, 10],
        [2, 1], [2, 3], [2, 5], [2, 7], [2, 9],
        [3, 0], [3, 2], [3, 4], [3, 6], [3, 8], [3, 10],
        [4, 1], [4, 3], [4, 5], [4, 7], [4, 9],
        [5, 0], [5, 2], [5, 4], [5, 6], [5, 8], [5, 10],
        [6, 1], [6, 3], [6, 5], [6, 7], [6, 9],
        [7, 0], [7, 2], [7, 4], [7, 6], [7, 8], [7, 10],
        [8, 1], [8, 3], [8, 5], [8, 7], [8, 9],
        [9, 0], [9, 2], [9, 4], [9, 6], [9, 8], [9, 10],
        [10, 1], [10, 3], [10, 5], [10, 7], [10, 9],
        [11, 0], [11, 2], [11, 4], [11, 6], [11, 8], [11, 10],
        [12, 1], [12, 3], [12, 5], [12, 7], [12, 9]
      ])
    });
  });
});
