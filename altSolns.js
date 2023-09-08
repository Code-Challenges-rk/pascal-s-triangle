/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  let triangle = [];
  if (numRows === 0) return triangle;

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};

function gen(numRows) {
  // Initialize an empty array to store the triangle.
  const triangle = [];

  // Special case: if numRows is 0, return an empty array.
  if (numRows === 0) {
    return triangle;
  }

  // Recursively generate the first numRows - 1 rows of the triangle.
  const previousRows = generate(numRows - 1);

  // The current row is the last row of the previousRows array.
  const currentRow = previousRows[previousRows.length - 1];

  // Initialize a new row as an array of 1s.
  const newRow = [1];

  // Add the elements from the current row to the new row.
  for (let i = 1; i < currentRow.length; i++) {
    newRow.push(currentRow[i - 1] + currentRow[i]);
  }

  // Add the new row to the triangle.
  triangle.push(newRow);

  return triangle;
}


let rows = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }

    let prevRows = generate(numRows - 1);
    let prevRow = prevRows[prevRows.length - 1];
    let currentRow = [1];

    for (let i = 1; i < numRows - 1; i++) {
        currentRow.push(prevRow[i - 1] + prevRow[i]);
    }

    currentRow.push(1);
    prevRows.push(currentRow);

    return prevRows;
};


let erate = function(numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    let firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
};
