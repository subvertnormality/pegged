'use strict';


const gridFactory = require('../lib/gridFactory.js');
const cellFactory = require('../lib/cellFactory.js');
const playerControls = require('../lib/playerControls.js');

describe('Player controls', () => {

  let gameGrid;

  beforeEach(() => {
    gameGrid = gridFactory.createInitialisedGrid();
  });

  test('can fetch player 1', () => {
    console.log(gameGrid)
    expect(playerControls.fetchPlayerOneIndex(gameGrid)).toEqual([11, 5]);
  });

});