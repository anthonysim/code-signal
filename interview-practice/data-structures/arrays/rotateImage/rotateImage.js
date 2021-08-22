function rotateImage(matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {
      // top left corner
      let topLeft = matrix[top][left + i];

      // bottom left corner to top left corner
      matrix[top][left + i] = matrix[bottom - i][left];

      // bottom right corner to bottom left corner
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // top right corner to bottom right corner
      matrix[bottom][right - i] = matrix[top + i][right]

      // top left corner to top right corner
      matrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return matrix;
}