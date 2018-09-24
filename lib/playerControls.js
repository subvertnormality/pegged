'use strict';

function fetchPlayerOneIndex(grid) {
  for (let i = 0; i < grid.length; i++) {
    const found = grid[i].findIndex((cell) => cell.player === 1);

    if (found !== -1) {
      return [i, found];
    }
  }

  return false;
}

module.exports = {
  fetchPlayerOneIndex: fetchPlayerOneIndex
};
