'use strict';

const cellFactory = require('./cellFactory');

function createPegRow() {
  const row = [];
  row.push(cellFactory.createPegCell());

  for (let i = 0; i < 9; i++) {
    row.push(cellFactory.createHorizontalWallCell());
    row.push(cellFactory.createPegCell());
  }

  return row;
}

function createSpaceRow() {
  const row = [];
  row.push(cellFactory.createVerticalWallCell());

  for (let i = 0; i < 9; i++) {
    row.push(cellFactory.createSpaceCell());
    row.push(cellFactory.createVerticalWallCell());
  }

  return row;
}

function createGameGrid() {
  const grid = [];
  grid.push(createPegRow());

  for (let i = 0; i < 7; i++) {
    grid.push(createSpaceRow());
    grid.push(createPegRow());
  }

  return grid;

}

function createExit(grid) {
  grid[3][9] = cellFactory.createExitCell();
  return grid;
}

function createPlayerOne(grid) {
  grid[11][5] = cellFactory.createPlayerOneCell();
  return grid;
}

function createPlayerTwo(grid) {
  grid[11][13] = cellFactory.createPlayerTwoCell();
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
