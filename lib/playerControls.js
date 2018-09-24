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

module.exports = {
  fetchPlayerOneIndex: fetchPlayerOneIndex,
  fetchPlayerTwoIndex: fetchPlayerTwoIndex
};
