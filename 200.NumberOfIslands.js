var numIslands = function(grid) {
  let count = 0
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(grid, i, j)
      }
    }
  }
  
  return count
};

function dfs(grid, x, y) {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

  if (grid[x][y] === '0') return
  
  const value = grid[x][y]

  if (value === '1') {
    grid[x][y] = '0'
    dfs(grid, x + 1, y)
    dfs(grid, x - 1, y)
    dfs(grid, x, y + 1)
    dfs(grid, x, y - 1)  
  }
}