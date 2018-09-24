'use strict';

jest.mock('../lib/cellFactory.js');

const gridFactory = require('../lib/gridFactory.js');
const cellFactory = require('../lib/cellFactory.js');

function s() {
  return {
    type: 'space',
    player: 0
  };
}

describe('Grid factory', () => {

  beforeEach(() => {
    cellFactory.createPegCell.mockReturnValue('*');
    cellFactory.createHorizontalWallCell.mockReturnValue('-');
    cellFactory.createSpaceCell = jest.fn(() => (
      { type: 'space', player: 0 }
    ));
    cellFactory.createVerticalWallCell.mockReturnValue('|');
    cellFactory.createExitCell.mockReturnValue('e');
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('can create a row consisting of pegs and horizontal walls', () => {
    const pegRow = gridFactory.createPegRow();

    expect(pegRow).toEqual(
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*']
    );
  });

  test('can create a row consisting of vertical walls and spaces', () => {
    const pegRow = gridFactory.createSpaceRow();

    expect(pegRow).toEqual(
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|']
    );
  });

  test('can create an empty game grid', () => {

    const gameGrid = gridFactory.createGameGrid();

    expect(gameGrid).toEqual([
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*']
    ]);
  });

  test('can initialise the exit', () => {

    const gameGrid = gridFactory.createGameGrid();

    const gameGridWithExit = gridFactory.createExit(gameGrid);

    expect(gameGridWithExit[3][9]).toEqual('e');
  });

  test('can initialise player 1', () => {
    const gameGrid = gridFactory.createGameGrid();

    const gameGridWithPlayerOne = gridFactory.createPlayerOne(gameGrid);

    expect(gameGridWithPlayerOne[11][5].player).toEqual(1);
  });

  test('can initialise player 2', () => {
    const gameGrid = gridFactory.createGameGrid();

    const gameGridWithPlayerTwo = gridFactory.createPlayerTwo(gameGrid);

    expect(gameGridWithPlayerTwo[11][13].player).toEqual(2);
  });

  test('can create an empty game grid', () => {

    const p1s = { player: 1, type: 'space' };
    const p2s = { player: 2, type: 'space' };
    const initialisedGameGrid = gridFactory.createInitialisedGrid();

    expect(initialisedGameGrid).toEqual([
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', 'e', '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', p1s, '|', s(), '|', s(), '|', s(), '|', p2s, '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*'],
      ['|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|', s(), '|'],
      ['*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*', '-', '*']
    ]);
  });

});
