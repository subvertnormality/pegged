'use strict';

const wallCell = {
  type: 'wall',
  destroyed: false,
  built: false
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
    type: 'exit',
    player: 0
  };
}

module.exports = {
  createPegCell: createPegCell,
  createVerticalWallCell: createVerticalWallCell,
  createHorizontalWallCell: createHorizontalWallCell,
  createSpaceCell: createSpaceCell,
  createExitCell: createExitCell
};
