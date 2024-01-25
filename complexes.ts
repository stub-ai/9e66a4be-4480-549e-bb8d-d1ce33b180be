type Grid = number[][];

function dfs(grid: Grid, i: number, j: number): number {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }

  // Mark the house as visited
  grid[i][j] = 0;

  // Count the current house and search in the four adjacent directions
  return (
    1 +
    dfs(grid, i - 1, j) +
    dfs(grid, i + 1, j) +
    dfs(grid, i, j - 1) +
    dfs(grid, i, j + 1)
  );
}

export function countComplexes(grid: Grid): number[] {
  const complexes = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        complexes.push(dfs(grid, i, j));
      }
    }
  }

  // Sort the complexes in ascending order
  complexes.sort((a, b) => a - b);

  return complexes;
}