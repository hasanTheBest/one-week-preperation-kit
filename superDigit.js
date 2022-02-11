function superDigit(n, k) {
  // initial string value summation
  let sum = 0;
  for (let d of n) {
    sum += parseInt(d);
  }

  // string value times k
  let digits = (sum * k).toString();

  // add the input until reach single digit
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
// output: 8
