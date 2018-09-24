'use strict';

jest.mock('../lib/cellFactory.js');

const gridFactory = require('../lib/gridFactory.js');
const cellFactory = require('../lib/cellFactory.js');

beforeEach(() => {
  cellFactory.createPegCell.mockReturnValue('*');
  cellFactory.createHorizontalWallCell.mockReturnValue('-');
  cellFactory.createSpaceCell.mockReturnValue(' ');
  cellFactory.createVerticalWallCell.mockReturnValue('|');
  cellFactory.createExitCell.mockReturnValue('e');
  cellFactory.createPlayerOneCell.mockReturnValue('1');
  cellFactory.createPlayerTwoCell.mockReturnValue('2');
});

afterEach(() => {
  jest.resetModules();
});

describe('Grid factory', () => {


  test('can create a row consisting of pegs and horizontal walls', () => {
    const pegRow = gridFactory.createPegRow();

    expect(pegRow).toEqual(
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*']
    );
  });

  test('can create a row consisting of vertical walls and spaces', () => {
    const pegRow = gridFactory.createSpaceRow();

    expect(pegRow).toEqual(
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|']
    );
  });

  test('can create an empty game grid', () => {

    const gameGrid = gridFactory.createGameGrid();

    expect(gameGrid).toEqual([
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*']
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

    expect(gameGridWithPlayerOne[11][5]).toEqual('1');
  });

  test('can initialise player 2', () => {
    const gameGrid = gridFactory.createGameGrid();

    const gameGridWithPlayerTwo = gridFactory.createPlayerTwo(gameGrid);

    expect(gameGridWithPlayerTwo[11][13]).toEqual('2');
  });

  test('can create an empty game grid', () => {

    const initialisedGameGrid = gridFactory.createInitialisedGrid();

    expect(initialisedGameGrid).toEqual([
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|','e','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|','1','|',' ','|',' ','|',' ','|','2','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*'],
      ['|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|',' ','|'],
      ['*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*','-','*']
    ]);
  });

});
