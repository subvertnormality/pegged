'use strict';

const cellFactory = require('./cellFactory');

function createPegRow() {
  const row = [];
  row.push(cellFactory.createPegCell());

  for (let i = 0; i < 5; i++) {
    row.push(cellFactory.createHorizontalWallCell());
    row.push(cellFactory.createPegCell());
  }

  return row;
}

function createSpaceRow() {
  const row = [];
  row.push(cellFactory.createVerticalWallCell());

  for (let i = 0; i < 5; i++) {
    row.push(cellFactory.createSpaceCell());
    row.push(cellFactory.createVerticalWallCell());
  }

  return row;
}

function createGameGrid() {
  const grid = [];
  grid.push(createPegRow());

  for (let i = 0; i < 6; i++) {
    grid.push(createSpaceRow());
    grid.push(createPegRow());
  }

  return grid;

}

function createExit(grid) {
  grid[3][5] = cellFactory.createExitCell();
  return grid;
}

function createPlayerOne(grid) {
  grid[9][3].player = 1;
  return grid;
}

function createPlayerTwo(grid) {
  grid[9][7].player = 2;
  return grid;
}

function createInitialisedGrid() {
  return createPlayerOne(createPlayerTwo(createExit(createGameGrid())));
}

module.exports = {
  createPegRow: createPegRow,
  createSpaceRow: createSpaceRow,
  createGameGrid: createGameGrid,
  createExit: createExit,
  createPlayerOne: createPlayerOne,
  createPlayerTwo: createPlayerTwo,
  createInitialisedGrid: createInitialisedGrid
};
