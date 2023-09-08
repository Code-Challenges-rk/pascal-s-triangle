function pascalTriangle(numRows) {
  // Initialize an empty array to store the triangle.
  const triangle = [];

  // Special case: if numRows is 0, return an empty array.
  if (numRows === 0) {
    return triangle;
  }

  // Iterate over the rows of the triangle.
  for (let row = 0; row < numRows; row++) {
    // Initialize a new row as an array of 1s.
    const currentRow = new Array(row + 1).fill(1);

    // If the row is not the first row, fill in the rest of the numbers in the row.
    if (row > 0) {
      for (let i = 1; i < row; i++) {
        currentRow[i] = triangle[row - 1][i - 1] + triangle[row - 1][i];
      }
    }

    // Add the current row to the triangle.
    triangle.push(currentRow);
  }

  return triangle;
}

const numRows = 5;
const triangle = pascalTriangle(numRows);
console.log(triangle);

