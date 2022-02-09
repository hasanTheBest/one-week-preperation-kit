function miniMaxSum(arr) {
  let min,
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // Duplicate array for modification
    const dupArr = [...arr];

    // One element is omitted for each iteration
    dupArr.splice(i, 1);

    // sum of the remaining element
    let sum = arrToSum(dupArr);

    // let first item sum is minimum
    if (i == 0) min = sum;

    if (sum > max) {
      max = sum;
    }

    if (sum < min) {
      min = sum;
    }
  }

  console.log(min, max);
}
// Min max Sum
miniMaxSum([1, 2, 3, 4, 5]);

// summation of the element
function arrToSum(arrToSum) {
  let sum = 0;

  for (let num of arrToSum) {
    sum += num;
  }
  return sum;
}
