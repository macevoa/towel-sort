
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  matrix.forEach((arr, ind) => {
    if (ind % 2) arr.reverse();
  });
  return matrix.flat(1);
}
