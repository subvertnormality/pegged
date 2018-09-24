'use strict';

const wallCell = {
  type: 'wall',
  destroyed: false,
  player: 0
};

function createPegCell() {

  return {
    type: 'peg',
    destroyed: false
  };
}

function createVerticalWallCell() {

  return Object.assign(wallCell, { orientation: 'vertical' });
}

function createHorizontalWallCell() {

  return Object.assign(wallCell, { orientation: 'horizontal' });
}

function createSpaceCell() {

  return {
    type: 'space',
    player: 0
  };
}

function createExitCell() {

  return {
    type: 'exit'
  };
}

function createPlayerOneCell() {

  return {
    type: 'player1'
  };
}

function createPlayerTwoCell() {

  return {
    type: 'player2'
  };
}


module.exports = {
  createPegCell: createPegCell,
  createVerticalWallCell: createVerticalWallCell,
  createHorizontalWallCell: createHorizontalWallCell,
  createSpaceCell: createSpaceCell,
  createExitCell: createExitCell,
  createPlayerOneCell: createPlayerOneCell,
  createPlayerTwoCell: createPlayerTwoCell
};
