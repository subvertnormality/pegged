'use strict';

const cellFactory = require('../lib/cellFactory');

describe('Cell factory', () => {

  test('can create a peg cell', () => {
    const pegCell = cellFactory.createPegCell();

    expect(pegCell).toEqual({
      type: 'peg',
      destroyed: false
    });
  });

  test('can create a vertical wall cell', () => {
    const verticalWallCell = cellFactory.createVerticalWallCell();

    expect(verticalWallCell).toEqual({
      type: 'wall',
      destroyed: false,
      orientation: 'vertical'
    });
  });

  test('can create a horizontal wall cell', () => {
    const horizontalWallCell = cellFactory.createHorizontalWallCell();

    expect(horizontalWallCell).toEqual({
      type: 'wall',
      destroyed: false,
      orientation: 'horizontal'
    });
  });

  test('can create a space cell', () => {
    const spaceCell = cellFactory.createSpaceCell();

    expect(spaceCell).toEqual({
      type: 'space',
      player: 0
    });
  });

  test('can create an exit cell', () => {
    const exitCell = cellFactory.createExitCell();

    expect(exitCell).toEqual({
      type: 'exit',
      player: 0
    });
  });

});
