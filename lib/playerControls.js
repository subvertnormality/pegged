'use strict';

function fetchPlayerIndex(grid, player) {
  for (let i = 0; i < grid.length; i++) {
    const found = grid[i].findIndex((cell) => cell.player === player);

    if (found !== -1) {
      return [i, found];
    }
  }

  return false;
}

function fetchPlayerOneIndex(grid) {
  return fetchPlayerIndex(grid, 1);
}

function fetchPlayerTwoIndex(grid) {
  return fetchPlayerIndex(grid, 2);
}

function moveIsValid(currentPlayerCoords, grid, x, y) {
  const wall = grid[currentPlayerCoords[0] + y][currentPlayerCoords[1] + x];

  if (wall.destroyed === false && wall.built === false) {
    return true;
  }

  return false;
}

function playerMoveTransform(currentPlayerCoords, x, y) {
  return [currentPlayerCoords[0] + y * 2, currentPlayerCoords[1] + x * 2];
}

function getValidPlayerMoves(currentPlayerCoords, grid) {
  const moves = new Set([]);

  if (moveIsValid(currentPlayerCoords, grid, 0, 1)) {
    moves.add(playerMoveTransform(currentPlayerCoords, 0, 1));
  }

  if (moveIsValid(currentPlayerCoords, grid, 0, -1)) {
    moves.add(playerMoveTransform(currentPlayerCoords, 0, -1));
  }

  if (moveIsValid(currentPlayerCoords, grid, 1, 0)) {
    moves.add(playerMoveTransform(currentPlayerCoords, 1, 0));
  }

  if (moveIsValid(currentPlayerCoords, grid, -1, 0)) {
    moves.add(playerMoveTransform(currentPlayerCoords, -1, 0));
  }

  return moves;
}

function getValidPlayerBuilds(grid) {
  const builds = new Set([]);

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const cell = grid[x][y];

      if (cell.type === 'wall' && !cell.built && !cell.destroyed) {
        builds.add([x, y]);
      }
    }
  }

  return builds;
}

function getValidPlayerActions(grid, player) {
  const currentPlayerCoords = fetchPlayerIndex(grid, player);
  const moves = getValidPlayerMoves(currentPlayerCoords, grid);
  const builds = getValidPlayerBuilds(grid);

  return { moves: moves, builds: builds };
}

module.exports = {
  fetchPlayerOneIndex: fetchPlayerOneIndex,
  fetchPlayerTwoIndex: fetchPlayerTwoIndex,
  getValidPlayerActions: getValidPlayerActions
};
