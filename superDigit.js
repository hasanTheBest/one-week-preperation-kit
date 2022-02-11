function superDigit(n, k) {
  // conver string to array and added
  let initialSum = 0;
  for (let d of n.split("")) {
    initialSum += d;
  }

  // multiple the results by k
  let digits = (initialSum * k).toString();

  // digits = (digits * k).toString();

  // add until get single digit
  while (digits.length > 1) {
    let sum = 0;
    for (let digit of digits) {
      sum += parseInt(digit);
    }

    // Number to string
    digits = sum.toString();
  }

  // should to return int value
  return parseInt(digits);
}

console.log(superDigit("9875", 4));
// output: 2
