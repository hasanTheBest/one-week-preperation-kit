function diagonalDifference(arr) {
  // Write your code here
  let ltrSum = 0,
    rtlSum = 0,
    arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    ltrSum += arr[i][i];

    rtlSum += arr[i][--arrLength];
  }

  return Math.abs(ltrSum - rtlSum);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
