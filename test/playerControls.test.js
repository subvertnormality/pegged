'use strict';


const gridFactory = require('../lib/gridFactory.js');
const playerControls = require('../lib/playerControls.js');

describe('Player controls', () => {

  let gameGrid;

  beforeEach(() => {
    gameGrid = gridFactory.createInitialisedGrid();
  });

  test('can fetch player 1', () => {
    expect(playerControls.fetchPlayerOneIndex(gameGrid)).toEqual([11, 5]);
  });

});
