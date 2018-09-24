'use strict';

function fetchPlayerOneIndex(grid) {
  for(let i = 0; i < grid.length; i++) {
    let found = grid[i].findIndex((cell) => {cell.player === 1});
    console.log('found: ', found);
    if (found !== -1) {
      return [i, found];
    }
  }
  return false;
}

module.exports = {
  fetchPlayerOneIndex: fetchPlayerOneIndex
};